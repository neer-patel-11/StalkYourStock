const UserSchema = require("../models/userModel");
const TransactionSchema = require("../models/transactionModel.js");
const PortfolioSchema = require("../models/portfolioModel");

const addTransaction = async (req, res) => {
  const name = req.query.name;
  const count = req.query.count;
  const currentPrice = req.query.currentPrice;
  const type = req.query.type;
  const email = req.query.email;

  console.log(email);
  console.log(name);
  console.log(count);
  console.log(currentPrice);
  console.log("currentPrice");
  try {
    const userData = await UserSchema.findOne({ email: email });
    console.log(userData);

    let transaction = new TransactionSchema({
      stockName: name,
      price: currentPrice,
      isBuy: type == "Buy" ? true : false,
      quantity: count,
      user: userData._id,
    });
    console.log(transaction);

    const portfolio = await PortfolioSchema.findOne({
      user: userData._id,
      stockName: name,
    });
    if (portfolio) {
      if (type == "Buy") {
        if (Number(currentPrice) * Number(count) > userData.credit) {
          console.log("insufficient Balance");
          res.send({ msg: "Insufficient balance" });
          return;
        } else {
          let avg =
            Number(portfolio.currentBuyings) /
            (Number(portfolio.currentQuantity) * 1.0);
          let buyings = Number(portfolio.currentBuyings) +  Number(currentPrice)* Number(count);
          portfolio.currentBuyings = buyings;
          let quantity = Number(count) + Number(portfolio.currentQuantity);
          portfolio.currentQuantity = quantity;
          userData.credit -= Number(currentPrice) * Number(count);
          portfolio.save();
        }
      } else {
        if (Number(count) > portfolio.currentQuantity) {
          await res.send({ msg: "Insufficient Shares to sell" });
          return;
        } else {
          let avg =
            Number(portfolio.currentBuyings) /
            (Number(portfolio.currentQuantity) * 1.0);
          let buyings = Number(portfolio.currentBuyings) - avg * Number(count);
          portfolio.currentBuyings = buyings;
          let quantity = Number(portfolio.currentQuantity) - Number(count);
          portfolio.currentQuantity = quantity;
          userData.credit += Number(currentPrice) * Number(count);
          portfolio.save();
        }
      }

      // userData.save();
    } else {
      if (type == "Buy") {
        if (Number(currentPrice) * Number(count) > userData.credit) {
          console.log("insufficenet balance");
          await res.send({ msg: "Insufficient balance" });
          return;
        } else {
          let portfolio = new PortfolioSchema({
            stockName: name,
            currentBuyings: currentPrice * count,
            currentQuantity: count,
            user: userData._id,
          });
          userData.credit -= Number(currentPrice) * Number(count);

          // userData.save();
          portfolio.save();
        }
      } else {
        res.send({ msg: "Insufficient shares to sell" });
        return;
      }
    }
    console.log("portfolio is here");
    await PortfolioSchema.findOneAndDelete({ currentQuantity: 0 });
    console.log("portfolio is gone");

    let TransactionData = await transaction.save();

    userData.transaction.push(TransactionData);
    userData.save();
    res.json({ TransactionData: TransactionData });
  } catch (e) {
    console.log(e);
  }
  //   console.log("In Port");
};

const getTransaction = async (req, res) => {
  try {
    let email = req.query.email;
    const user = await UserSchema.findOne({ email: email });

    const transaction = await TransactionSchema.find({ user: user._id });
    transaction.reverse();
    // console.log(transaction);
    res.json({ transaction: transaction });
  } catch (e) {
    console.log(e);
  }
  //   console.log("In Port");
};

module.exports = {
  addTransaction: addTransaction,
  getTransaction: getTransaction,
};

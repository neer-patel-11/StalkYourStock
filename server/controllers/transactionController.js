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
    let TransactionData = await transaction.save();

    const portfolio = await PortfolioSchema.findOne({
      user: userData._id,
      stockName: name,
    });
    if (portfolio) {
      if (type == "Buy") {
        let buyings =
          Number(portfolio.currentBuyings) +
          Number(currentPrice) * Number(count);
        portfolio.currentBuyings = buyings;
        let quantity = Number(count) + Number(portfolio.currentQuantity);
        portfolio.currentQuantity = quantity;
      } else {
        let buyings =
          Number(portfolio.currentBuyings) -
          Number(currentPrice) * Number(count);
        portfolio.currentBuyings = buyings;
        let quantity = Number(portfolio.currentQuantity) - Number(count);
        portfolio.currentQuantity = quantity;
      }

      portfolio.save();
    } else {
      let portfolio = new PortfolioSchema({
        stockName: name,
        currentBuyings: currentPrice * count,
        currentQuantity: count,
        user: userData._id,
      });
      portfolio.save();
    }

    userData.transaction.push(TransactionData);
    userData.save();
    res.json({ TransactionData: TransactionData });
  } catch (e) {
    console.log(e);
  }
  //   console.log("In Port");
};

module.exports = { addTransaction: addTransaction };

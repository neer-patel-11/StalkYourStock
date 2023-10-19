const UserSchema = require("../models/userModel");
const PortfolioSchema = require("../models/portfolioModel.js");

const addToPortfolio = async (req, res) => {
  const name = req.query.name;
  const count = req.query.count;
  const currentPrice = req.query.currentPrice;
  console.log(name);
  console.log(count);
  console.log(currentPrice);
  console.log("currentPrice");
  try {
    let email = "patelhitarth07@gmail.com";
    const userData = await UserSchema.findOne({ email: email });
    console.log(userData);
    let portfolio = new PortfolioSchema({
      stockName: name,
      buyingPrice: currentPrice,
      quantity: count,
      user: userData._id,
    });
    console.log(portfolio);
    let PortfolioData = await portfolio.save();
    res.json({ PortfolioData: PortfolioData });
  } catch (e) {
    console.log(e);
  }
  //   console.log("In Port");
};

const getPortfolio = async (req, res) => {
  try {
    console.log("HeyPort");
    let email = req.query.email;
    const user = await UserSchema.findOne({ email: email });

    const portfolio = await PortfolioSchema.find({ user: user._id });
    console.log(portfolio);
    res.json({ portfolio: portfolio, balance: user.credit });
  } catch (e) {
    console.log(e);
  }
  //   console.log("In Port");
};

module.exports = { addPortfolio: addToPortfolio, getPortfolio: getPortfolio };

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

module.exports = { addPortfolio: addToPortfolio };

const axios = require("axios");

const stockInfo = async (req, res) => {
  let stockSymbol = "RELIANCE";
  console.log("info");

  let data = await axios.get(
    `https://query1.finance.yahoo.com/v6/finance/quoteSummary/${stockSymbol}.ns?modules=financialData`
  );
  console.log(data);
  res.json({ details: data });
};

module.exports = { info: stockInfo };

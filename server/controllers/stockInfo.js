const axios = require("axios");

const { readFileSync } = require("fs");

const nameInfo = async (req, res) => {
  console.log("hello0");

  const parsedData = [];
  try {
    const textContent = readFileSync("EQUITY_L.csv", "utf8");

    for (let row of textContent.split("\n")) {
      const rowItems = row.split(",");
      parsedData.push(rowItems[0]);
    }

    // var jsonObject = { data: parsedData };
    // console.log("onloasd");
    // console.log(parsedData);
    res.json({ parsedData: parsedData });
  } catch (error) {
    console.error(error);
  }
};

// let cancelTokenSource = null;
const stockInfo = async (req, res) => {
  let stockSymbol = req.query.name;

  if (!stockSymbol) {
    return res.status(400).json({ error: "Stock symbol is required" });
  }

  try {
    let data = await axios.get(
      `https://query1.finance.yahoo.com/v6/finance/quoteSummary/${stockSymbol}.ns?modules=financialData`
    );

    if (data.status === 200) {
      const details = data.data.quoteSummary.result[0];
      res.json({ details: details });
    } else {
      res.status(data.status).json({ error: "Stock symbol not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { info: stockInfo, nameInfo: nameInfo };

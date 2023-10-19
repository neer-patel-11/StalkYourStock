const axios = require("axios");

const chart = async (req, res) => {
  let stockSymbol = req.query.name;
  let data;
  try {
    data = await axios.get(
      `https://query1.finance.yahoo.com/v8/finance/chart/${stockSymbol}.ns?metrics=close?&interval=1d&range=1y`
    );
  } catch (e) {
    console.log(e);
  }
  console.log(stockSymbol);

  let time = data.data.chart.result[0].timestamp;
  let price = data.data.chart.result[0].indicators.quote[0].close;
  let arr = [];
  for (let i = 0; i < time.length; i++) {
    var dt = new Date(0);
    dt.setUTCSeconds(time[i]);
    let temp = {};
    temp.date = dt;
    temp.price = price[i]?.toFixed(2);
    arr.push(temp);
  }
  res.json({ arr: arr });
};

module.exports = { chart: chart };

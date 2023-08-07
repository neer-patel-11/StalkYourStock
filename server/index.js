
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());

app.post('/submit', (req, res) => {
  console.log('Received data from the form:', req.body);
  res.sendStatus(200);
});

app.listen(8080 ,(err)=>{
  console.log(err);
})

// https://query1.finance.yahoo.com/v8/finance/chart/RELIANCE.ns?metrics=high?&interval=3mo&range=10mo
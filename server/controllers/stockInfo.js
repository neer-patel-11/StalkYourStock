const axios = require('axios')

const stockInfo = async ()=>{
    
    let stockSymbol ="RELIANCE";


    let data = await axios.get(
        `https://query1.finance.yahoo.com/v8/finance/data/${stockSymbol}.ns`
        );

   

    console.log(data);
}

stockInfo()
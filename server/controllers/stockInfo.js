const axios = require('axios')

const chart = async ()=>{
    
    let stockSymbol ="TATACHEM";


    let data = await axios.get(
        `https://query1.finance.yahoo.com/v6/finance/quoteSummary/${stockSymbol}.ns?modules=assetProfile`
        );

   

    console.log(data.data.quoteSummary.result[0].assetProfile);
}

chart()
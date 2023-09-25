import React, { useState } from "react";
import LiveStock from "../LiveStock";
import { useEffect } from "react";
import axios from "axios";

const Stock = () => {
  const [getData, setGetData] = useState(false);
  useEffect(() => {
    const getNames = async () => {
      console.log("hello");
      axios
        .get("http://localhost:8080/stock/name")
        .then((response) => {
          // console.log(JSON.stringify(response.data.parsedData[0]));
          for (
            let index = 1;
            index < response.data.parsedData.length;
            index++
          ) {
            var option = document.createElement("option");
            option.text = response.data.parsedData[index];
            option.value = response.data.parsedData[index];
            document.getElementById("stockSymbol").appendChild(option);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    getNames();
  });

  return (
    <div>
      <form onSubmit={setGetData(true)}>
        <label>Company Name</label>
        {/* <input type="text" onChange={getStockDetails} /> */}
        <select type="text" name="stockSymbol" id="stockSymbol"></select>
        <button type="submit">Submit</button>
      </form>

      <LiveStock name="TATACHEM" flag={getData}></LiveStock>
    </div>
  );
};

export default Stock;

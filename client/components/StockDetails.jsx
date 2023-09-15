"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import StockChart from "./StockChart";
import StockTextDetails from "./StockTextDetails";

// import myCSV from "@public/EQUITY_L.csv";

const StockDetails = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [name, setName] = useState("TATACHEM");

  const toggleButton = () => {
    setShowDetails((prev) => {
      return !prev;
    });
  };

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
  }, []);

  const getStockDetails = (e) => {
    e.preventDefault();
    setName(document.querySelector("#stockSymbol").value);
  };

  return (
    <div>
      <div>
        <form onSubmit={getStockDetails}>
          <label>Company Name</label>
          <select type="text" name="stockSymbol" id="stockSymbol"></select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <button onClick={toggleButton}>See Chart</button>
      {showDetails && <StockTextDetails name={name} />}
      {!showDetails && <StockChart name={name} />}
    </div>
  );
};

export default StockDetails;

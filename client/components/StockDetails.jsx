"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const StockDetails = () => {
  const [details, setDetails] = useState([]);
  const getStockDetails = async () => {
    axios
      .get("http://localhost:8080/stock/stockDetails")
      .then((response) => {
        setDetails(response.data.details);
        console.log(response.data.details);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div>
      <div>
        <form onSubmit={getStockDetails}>
          <label>Company Name</label>
          {/* <input type="text" onChange={getStockDetails} /> */}
          <button type="submit">Submit</button>
        </form>
      </div>
      <p>{details}</p>
    </div>
  );
};

export default StockDetails;

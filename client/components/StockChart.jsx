import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import GetChart from "./GetChart";

const StockChart = (props) => {
  const [chartInfo, setChartInfo] = useState([]);

  useEffect(() => {
    //     e.preventDefault();
    //     const name = "RELIANCE";
    const name = props.name;

    axios
      .get("http://localhost:8080/stock/stockChart?name=" + name)
      .then((response) => {
        setChartInfo(response.data.arr);
        //   console.log(response.data.arr);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {/* <button onClick={getChart}>Get</button> */}

      <GetChart data={chartInfo}></GetChart>
    </div>
  );
};

export default StockChart;

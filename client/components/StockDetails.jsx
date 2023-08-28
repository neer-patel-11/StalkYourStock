"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

// import myCSV from "@public/EQUITY_L.csv";

const StockDetails = () => {
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

  const [details, setDetails] = useState({
    maxAge: "",
    currentPrice: { raw: "", fmt: "" },
    targetHighPrice: { raw: "", fmt: "" },
    targetLowPrice: { raw: "", fmt: "" },
    targetMeanPrice: { raw: "", fmt: "" },
    targetMedianPrice: { raw: "", fmt: "" },
    recommendationMean: { raw: "", fmt: "" },
    recommendationKey: "",
    numberOfAnalystOpinions: { raw: "", fmt: "", longFmt: "" },
    totalCash: { raw: "", fmt: "", longFmt: "" },
    totalCashPerShare: { raw: "", fmt: "" },
    ebitda: { raw: "", fmt: "", longFmt: "" },
    totalDebt: { raw: "", fmt: "", longFmt: "" },
    quickRatio: {},
    currentRatio: {},
    totalRevenue: { raw: "", fmt: "", longFmt: "" },
    debtToEquity: { raw: "", fmt: "" },
    revenuePerShare: { raw: "", fmt: "" },
    returnOnAssets: {},
    returnOnEquity: {},
    grossProfits: { raw: "", fmt: "", longFmt: "" },
    freeCashflow: {},
    operatingCashflow: {},
    earningsGrowth: { raw: "", fmt: "" },
    revenueGrowth: { raw: "", fmt: "" },
    grossMargins: { raw: "", fmt: "" },
    ebitdaMargins: { raw: "", fmt: "" },
    operatingMargins: { raw: "", fmt: "" },
    profitMargins: { raw: "", fmt: "" },
    financialCurrency: "",
  });

  // getNames();

  const getStockDetails = async (e) => {
    e.preventDefault();
    const name = document.querySelector("#stockSymbol").value;

    axios
      .get("http://localhost:8080/stock/stockDetails?name=" + name)
      .then((response) => {
        console.log("Hlo");
        const newDetails = response.data.details.financialData;
        // console.log(newDetails);
        setDetails((prevState) => ({
          ...prevState,
          maxAge: newDetails.maxAge || "",
          currentPrice: newDetails.currentPrice || { raw: "", fmt: "" },
          targetHighPrice: newDetails.targetHighPrice || { raw: "", fmt: "" },
          targetLowPrice: newDetails.targetLowPrice || { raw: "", fmt: "" },
          targetMeanPrice: newDetails.targetMeanPrice || { raw: "", fmt: "" },
          targetMedianPrice: newDetails.targetMedianPrice || {
            raw: "",
            fmt: "",
          },
          recommendationMean: newDetails.recommendationMean || {
            raw: "",
            fmt: "",
          },
          recommendationKey: newDetails.recommendationKey || "",
          numberOfAnalystOpinions: newDetails.numberOfAnalystOpinions || {
            raw: "",
            fmt: "",
            longFmt: "",
          },
          totalCash: newDetails.totalCash || { raw: "", fmt: "", longFmt: "" },
          totalCashPerShare: newDetails.totalCashPerShare || {
            raw: "",
            fmt: "",
          },
          ebitda: newDetails.ebitda || { raw: "", fmt: "", longFmt: "" },
          totalDebt: newDetails.totalDebt || { raw: "", fmt: "", longFmt: "" },
          quickRatio: newDetails.quickRatio || {},
          currentRatio: newDetails.currentRatio || {},
          totalRevenue: newDetails.totalRevenue || {
            raw: "",
            fmt: "",
            longFmt: "",
          },
          debtToEquity: newDetails.debtToEquity || { raw: "", fmt: "" },
          revenuePerShare: newDetails.revenuePerShare || { raw: "", fmt: "" },
          returnOnAssets: newDetails.returnOnAssets || {},
          returnOnEquity: newDetails.returnOnEquity || {},
          grossProfits: newDetails.grossProfits || {
            raw: "",
            fmt: "",
            longFmt: "",
          },
          freeCashflow: newDetails.freeCashflow || {},
          operatingCashflow: newDetails.operatingCashflow || {},
          earningsGrowth: newDetails.earningsGrowth || { raw: "", fmt: "" },
          revenueGrowth: newDetails.revenueGrowth || { raw: "", fmt: "" },
          grossMargins: newDetails.grossMargins || { raw: "", fmt: "" },
          ebitdaMargins: newDetails.ebitdaMargins || { raw: "", fmt: "" },
          operatingMargins: newDetails.operatingMargins || { raw: "", fmt: "" },
          profitMargins: newDetails.profitMargins || { raw: "", fmt: "" },
          financialCurrency: newDetails.financialCurrency || "",
        }));

        console.log(details);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  // console.log("Hello");
  return (
    <div>
      <div>
        <form onSubmit={getStockDetails}>
          <label>Company Name</label>
          {/* <input type="text" onChange={getStockDetails} /> */}
          <select type="text" name="stockSymbol" id="stockSymbol"></select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h1>Details</h1>
        <ul>
          <li>Max Age: {details.maxAge}</li>
          <li>Current Price: {details.currentPrice.raw}</li>
          <li>Target High Price: {details.targetHighPrice.raw}</li>
          <li>Target Low Price: {details.targetLowPrice.raw}</li>
          <li>Target Mean Price: {details.targetMeanPrice.raw}</li>
          <li>Target Median Price: {details.targetMedianPrice.raw}</li>
          <li>Recommendation Mean: {details.recommendationMean.raw}</li>
          <li>Recommendation Key: {details.recommendationKey}</li>
          <li>
            Number of Analyst Opinions: {details.numberOfAnalystOpinions.raw}
          </li>
          <li>Total Cash: {details.totalCash.raw}</li>
          <li>Total Cash Per Share: {details.totalCashPerShare.raw}</li>
          <li>EBITDA: {details.ebitda.raw}</li>
          <li>Total Debt: {details.totalDebt.raw}</li>
          <li>Quick Ratio: {details.quickRatio.raw}</li>
          <li>Current Ratio: {details.currentRatio.raw}</li>
          <li>Total Revenue: {details.totalRevenue.raw}</li>
          <li>Debt to Equity: {details.debtToEquity.raw}</li>
          <li>Revenue Per Share: {details.revenuePerShare.raw}</li>
          <li>Return on Assets: {details.returnOnAssets.raw}</li>
          <li>Return on Equity: {details.returnOnEquity.raw}</li>
          <li>Gross Profits: {details.grossProfits.raw}</li>
          <li>Free Cashflow: {details.freeCashflow.raw}</li>
          <li>Operating Cashflow: {details.operatingCashflow.raw}</li>
          <li>Earnings Growth: {details.earningsGrowth.raw}</li>
          <li>Revenue Growth: {details.revenueGrowth.raw}</li>
          <li>Gross Margins: {details.grossMargins.raw}</li>
          <li>EBITDA Margins: {details.ebitdaMargins.raw}</li>
          <li>Operating Margins: {details.operatingMargins.raw}</li>
          <li>Profit Margins: {details.profitMargins.raw}</li>
          <li>Financial Currency: {details.financialCurrency}</li>
        </ul>
      </div>
    </div>
  );
};

export default StockDetails;

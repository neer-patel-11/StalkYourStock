"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import StockChart from "./StockChart";

const StockTextDetails = (props) => {
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

  useEffect(() => {
    axios
      .get("http://localhost:8080/stock/stockDetails?name=" + props.name)
      .then((response) => {
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

        // console.log(details);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  const buyStock = async (e) => {
    e.preventDefault();
    let type = e.target.value;
    const totalStock = document.querySelector("#stockNo").value;
    axios
      .get(
        "http://localhost:8080/transaction?name=" +
          props.name +
          "&type=" +
          type +
          "&count=" +
          totalStock +
          "&currentPrice=" +
          details.currentPrice.raw +
          "&email=" +
          localStorage.getItem("email")
      )
      .then((response) => {
        console.log(response.data.PortfolioData);
      });
  };

  return (
    <>
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
      <input type="number" id="stockNo" min="1" />
      <button onClick={buyStock} value="Buy">
        Buy
      </button>
      <button onClick={buyStock} value="Sell">
        Sell
      </button>
    </>
  );
};

export default StockTextDetails;

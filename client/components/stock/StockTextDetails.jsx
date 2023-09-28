'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StockChart from './StockChart'

const StockTextDetails = (props) => {
  const [details, setDetails] = useState({
    maxAge: '',
    currentPrice: { raw: '', fmt: '' },
    targetHighPrice: { raw: '', fmt: '' },
    targetLowPrice: { raw: '', fmt: '' },
    targetMeanPrice: { raw: '', fmt: '' },
    targetMedianPrice: { raw: '', fmt: '' },
    recommendationMean: { raw: '', fmt: '' },
    recommendationKey: '',
    numberOfAnalystOpinions: { raw: '', fmt: '', longFmt: '' },
    totalCash: { raw: '', fmt: '', longFmt: '' },
    totalCashPerShare: { raw: '', fmt: '' },
    ebitda: { raw: '', fmt: '', longFmt: '' },
    totalDebt: { raw: '', fmt: '', longFmt: '' },
    quickRatio: {},
    currentRatio: {},
    totalRevenue: { raw: '', fmt: '', longFmt: '' },
    debtToEquity: { raw: '', fmt: '' },
    revenuePerShare: { raw: '', fmt: '' },
    returnOnAssets: {},
    returnOnEquity: {},
    grossProfits: { raw: '', fmt: '', longFmt: '' },
    freeCashflow: {},
    operatingCashflow: {},
    earningsGrowth: { raw: '', fmt: '' },
    revenueGrowth: { raw: '', fmt: '' },
    grossMargins: { raw: '', fmt: '' },
    ebitdaMargins: { raw: '', fmt: '' },
    operatingMargins: { raw: '', fmt: '' },
    profitMargins: { raw: '', fmt: '' },
    financialCurrency: ''
  })

  // getNames();

  useEffect(() => {
    axios
      .get('http://localhost:8080/stock/stockDetails?name=' + props.name)
      .then((response) => {
        const newDetails = response.data.details.financialData
        // console.log(newDetails);
        setDetails((prevState) => ({
          ...prevState,
          maxAge: newDetails.maxAge || '',
          currentPrice: newDetails.currentPrice || { raw: '', fmt: '' },
          targetHighPrice: newDetails.targetHighPrice || { raw: '', fmt: '' },
          targetLowPrice: newDetails.targetLowPrice || { raw: '', fmt: '' },
          targetMeanPrice: newDetails.targetMeanPrice || { raw: '', fmt: '' },
          targetMedianPrice: newDetails.targetMedianPrice || {
            raw: '',
            fmt: ''
          },
          recommendationMean: newDetails.recommendationMean || {
            raw: '',
            fmt: ''
          },
          recommendationKey: newDetails.recommendationKey || '',
          numberOfAnalystOpinions: newDetails.numberOfAnalystOpinions || {
            raw: '',
            fmt: '',
            longFmt: ''
          },
          totalCash: newDetails.totalCash || { raw: '', fmt: '', longFmt: '' },
          totalCashPerShare: newDetails.totalCashPerShare || {
            raw: '',
            fmt: ''
          },
          ebitda: newDetails.ebitda || { raw: '', fmt: '', longFmt: '' },
          totalDebt: newDetails.totalDebt || { raw: '', fmt: '', longFmt: '' },
          quickRatio: newDetails.quickRatio || {},
          currentRatio: newDetails.currentRatio || {},
          totalRevenue: newDetails.totalRevenue || {
            raw: '',
            fmt: '',
            longFmt: ''
          },
          debtToEquity: newDetails.debtToEquity || { raw: '', fmt: '' },
          revenuePerShare: newDetails.revenuePerShare || { raw: '', fmt: '' },
          returnOnAssets: newDetails.returnOnAssets || {},
          returnOnEquity: newDetails.returnOnEquity || {},
          grossProfits: newDetails.grossProfits || {
            raw: '',
            fmt: '',
            longFmt: ''
          },
          freeCashflow: newDetails.freeCashflow || {},
          operatingCashflow: newDetails.operatingCashflow || {},
          earningsGrowth: newDetails.earningsGrowth || { raw: '', fmt: '' },
          revenueGrowth: newDetails.revenueGrowth || { raw: '', fmt: '' },
          grossMargins: newDetails.grossMargins || { raw: '', fmt: '' },
          ebitdaMargins: newDetails.ebitdaMargins || { raw: '', fmt: '' },
          operatingMargins: newDetails.operatingMargins || { raw: '', fmt: '' },
          profitMargins: newDetails.profitMargins || { raw: '', fmt: '' },
          financialCurrency: newDetails.financialCurrency || ''
        }))

        // console.log(details);
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  })

  const buyStock = async (e) => {
    e.preventDefault()
    let type = e.target.value
    const totalStock = document.querySelector('#stockNo').value
    axios
      .get(
        'http://localhost:8080/transaction?name=' +
          props.name +
          '&type=' +
          type +
          '&count=' +
          totalStock +
          '&currentPrice=' +
          details.currentPrice.raw +
          '&email=' +
          localStorage.getItem('email')
      )
      .then((response) => {
        console.log(response.data.PortfolioData)
      })
  }

  return (
    <>
      <div class="bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100  shadow-lg p-6 text-center">
        <h1 class="text-2xl font-semibold font-sys mb-4 text-white">W{props.name}</h1>
        <ul className="grid grid-cols-2 text-left text-white gap-x-20 gap-y-2">
          <li class="mb-2">Max Age: {details.maxAge}</li>
          <li class="mb-2">Current Price: {details.currentPrice.raw}</li>
          <li class="mb-2">Target High Price: {details.targetHighPrice.raw}</li>
          <li class="mb-2">Target Low Price: {details.targetLowPrice.raw}</li>
          <li class="mb-2">Target Mean Price: {details.targetMeanPrice.raw}</li>
          <li class="mb-2">Target Median Price: {details.targetMedianPrice.raw}</li>
          <li class="mb-2">Recommendation Mean: {details.recommendationMean.raw}</li>
          <li class="mb-2">Recommendation Key: {details.recommendationKey}</li>
          <li class="mb-2">Number of Analyst Opinions: {details.numberOfAnalystOpinions.raw}</li>
          <li class="mb-2">Total Cash: {details.totalCash.raw}</li>
          <li class="mb-2">Total Cash Per Share: {details.totalCashPerShare.raw}</li>
          <li class="mb-2">EBITDA: {details.ebitda.raw}</li>
          <li class="mb-2">Total Debt: {details.totalDebt.raw}</li>
          <li class="mb-2">Total Revenue: {details.totalRevenue.raw}</li>
          <li class="mb-2">Debt to Equity: {details.debtToEquity.raw}</li>
          <li class="mb-2">Revenue Per Share: {details.revenuePerShare.raw}</li>
          <li class="mb-2">Gross Profits: {details.grossProfits.raw}</li>
          <li class="mb-2">Earnings Growth: {details.earningsGrowth.raw}</li>
          <li class="mb-2">Revenue Growth: {details.revenueGrowth.raw}</li>
          <li class="mb-2">Gross Margins: {details.grossMargins.raw}</li>
          <li class="mb-2">EBITDA Margins: {details.ebitdaMargins.raw}</li>
          <li class="mb-2">Operating Margins: {details.operatingMargins.raw}</li>
          <li class="mb-2">Profit Margins: {details.profitMargins.raw}</li>
          <li class="mb-2">Financial Currency: {details.financialCurrency}</li>
        </ul>
      </div>
      <div class="mt-16 mb-5 flex items-center space-x-4">
        <input class="border rounded px-2 py-1" type="number" id="stockNo" min="1" />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={buyStock}
          value="Buy">
          Buy
        </button>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={buyStock}
          value="Sell">
          Sell
        </button>
      </div>
    </>
  )
}

export default StockTextDetails

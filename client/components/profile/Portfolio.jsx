import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Portfolio = () => {
  // const [userData, setUserData] = useState({})
  const [portfolios, setPortfolio] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/portfolio/get?email=' + localStorage.getItem('email')).then((response) => {
      console.log(response.data.portfolio)
      setPortfolio(response.data.portfolio)
      // setUserData(response.data.userData)
    })
  }, [])
  return (
    <>
      {portfolios.map((portfolio, index) => {
        return (
          <div key={index} class="bg-gray-800 mt-11 w-fit p-4 rounded-lg shadow-lg text-white mx-auto">
            <div class="flex justify-center">
              <div class="text-right">
                <p class="font-light text-white mt-3">Stock Name:</p>
                <p class="font-light text-white mt-3">Current Buyings:</p>
                <p class="font-light text-white mt-3">Current Quantity:</p>
              </div>
              <div class="text-left">
                <p class="font-light text-white mt-3">{portfolio.stockName}</p>
                <p class="font-light text-white mt-3">{portfolio.currentBuyings}</p>
                <p class="font-light text-white mt-3">{portfolio.currentQuantity}</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Portfolio

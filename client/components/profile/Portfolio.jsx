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
      <div className="mt-24 text-white text-center">
        <h1 className="text-3xl font-semibold mb- underline underline-offset-4">Portfolio</h1>
        <div className="mt-8 flex justify-center">
          <div className=" bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100  p-6 text-white shadow-lg">
            <p className="text-2xl font-semibold mb-2">Current Balance</p>
            <p className="text-4xl font-bold">20,000 INR</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        {portfolios.map((portfolio, index) => {
          return (
            <div key={index} className="bg-black rounded-md bg-opacity-40 border border-white mt-11 w-fit p-4 shadow-lg text-white mx-auto">
              <div className="flex justify-center">
                <table className="min-w-full p-4 rounded-lg shadow-md">
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 text-left font-medium text-white">Stock Name:</td>
                      <td className="py-2 px-4 font-medium text-white">{portfolio.stockName}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-left font-medium text-white">Current Buyings:</td>
                      <td className="py-2 px-4 font-medium text-white">{portfolio.currentBuyings}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-left font-medium text-white">Current Quantity:</td>
                      <td className="py-2 px-4 font-medium text-white">{portfolio.currentQuantity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Portfolio

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Portfolio = () => {
  // const [userData, setUserData] = useState({})
  const [portfolios, setPortfolio] = useState([])
  const [filteredPortfolios, setFilteredPortfolios] = useState([])
  const [credits, setCredits] = useState('')
  useEffect(() => {
    axios.get('http://localhost:8080/portfolio/get?email=' + localStorage.getItem('email')).then((response) => {
      console.log(response.data.portfolio)
      setPortfolio(response.data.portfolio)
      setFilteredPortfolios(response.data.portfolio)

      setCredits(response.data.balance)
      // setUserData(response.data.userData)
    })
  }, [])
  const handleSearch = (e) => {
    e.preventDefault()
    const val = document.querySelector('#stock-search-input').value.trim() // Get the input value and trim leading/trailing spaces

    if (val !== '') {
      const filteredList = portfolios.filter((portfolio) => portfolio.stockName.toLowerCase().includes(val.toLowerCase()))

      setFilteredPortfolios(filteredList)
    } else {
      // If the search input is empty, show all portfolios
      setFilteredPortfolios(portfolios)
    }
    document.querySelector('#stock-search-input').value = ''
  }

  return (
    <>
      <div className="mt-24 text-white text-center">
        <h1 className="text-3xl font-semibold mb- underline underline-offset-4">Portfolio</h1>
        <div className="mt-8 flex justify-center">
          <div className=" bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100  p-6 text-white shadow-lg">
            <p className="text-2xl font-semibold mb-2">Current Balance</p>
            <p className="text-4xl font-bold">{Math.round(credits * 100) / 100}</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-5">
        <form class="flex" id="stock-search-form" onSubmit={handleSearch}>
          <input
            type="text"
            id="stock-search-input"
            placeholder="Search for stocks..."
            class="px-4 py-2 rounded-l border border-gray-700 bg-gray-800 text-white"
          />
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-r">
            Search
          </button>
        </form>
      </div>

      <div className="mt-6">
        {filteredPortfolios.map((portfolio, index) => {
          return (
            <div key={index} className="bg-black rounded-md bg-opacity-40 border border-white mt-11 w-96 p-4 shadow-lg text-white mx-auto">
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

                    <tr>
                      <td className="py-2 px-4 text-left font-medium text-white">Average Price:</td>
                      <td className="py-2 px-4 font-medium text-white">{portfolio.currentBuyings / (portfolio.currentQuantity * 1.0)}</td>
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

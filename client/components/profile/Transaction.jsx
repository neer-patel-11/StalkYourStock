import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Transaction = () => {
  const [transactions, setTransactions] = useState([])
  const [buyEntries, setBuyEntries] = useState([])
  const [filteredBuyEntries, setFilteredBuyEntries] = useState([])
  const [sellEntries, setSellEntries] = useState([])
  const [filteredSellEntries, setFilteredSellEntries] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/transaction/get?email=' + localStorage.getItem('email')).then((response) => {
      console.log(response.data.transaction)
      setTransactions(response.data.transaction)
      const buys = response.data.transaction.filter((transaction) => transaction.isBuy)
      setBuyEntries(buys)
      const sells = response.data.transaction.filter((transaction) => !transaction.isBuy)
      setSellEntries(sells)
      setFilteredBuyEntries(buys)
      setFilteredSellEntries(sells)
    })
  }, [])
  const handleSearch = (e) => {
    e.preventDefault()
    const val = document.querySelector('#stock-search-input').value.trim() // Get the input value and trim leading/trailing spaces

    if (val !== '') {
      const filteredBuyList = buyEntries.filter((portfolio) => portfolio.stockName.toLowerCase().includes(val.toLowerCase()))
      setFilteredBuyEntries(filteredBuyList)
      const filteredSellList = sellEntries.filter((portfolio) => portfolio.stockName.toLowerCase().includes(val.toLowerCase()))
      setFilteredSellEntries(filteredSellList)
    } else {
      setFilteredBuyEntries(buyEntries)
      setFilteredSellEntries(sellEntries)
    }
    document.querySelector('#stock-search-input').value = ''
  }

  return (
    <div className=" bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 mt-24 text-center mx-20 p-4 shadow-lg text-white">
      <h2 className="text-3xl font-semibold mb-4">Transactions</h2>
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
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-green-500">Buys</h3>
          {filteredBuyEntries.map((transaction, index) => {
            return (
              <div key={index} className="mb-4 bg-gray-800 p-4 rounded shadow-md">
                <p className="text-xl font-semibold">{transaction.stockName}</p>
                <p class="text-white py-1 w-fit mx-auto my-0  px-2 rounded bg-green-500">Bought {transaction.quantity} shares</p>
                <div className="mt-2">
                  <p className="text-white">Price: {transaction.price} INR</p>
                  <p className="text-white">Time: {new Date(transaction.time).toLocaleString()}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-500">Sells</h3>

          {filteredSellEntries.map((transaction, index) => {
            return (
              <div key={index} className="mb-4 bg-gray-800 p-4 rounded shadow-md">
                <p className="text-xl font-semibold">{transaction.stockName}</p>
                <p class="text-white py-1 w-fit mx-auto my-0  px-2 rounded bg-red-500">Sold {transaction.quantity} shares</p>
                <div className="mt-2">
                  <p className="text-white">Price: {transaction.price} INR</p>
                  <p className="text-white">Time: {new Date(transaction.time).toLocaleString()}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Transaction

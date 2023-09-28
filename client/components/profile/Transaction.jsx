import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Transaction = () => {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/transaction/get?email=' + localStorage.getItem('email')).then((response) => {
      console.log(response.data.transaction)
      setTransactions(response.data.transaction)
    })
  }, [])
  return (
    <div class=" bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 mt-24 text-center mx-20 p-4 shadow-lg text-white">
      <h2 class="text-xl font-semibold mb-4">Transactions</h2>
      {transactions.map((transaction, index) => {
        return (
          <div key={index} class="mb-4 bg-gray-800 p-4 rounded shadow-md">
            <p class="text-xl font-semibold">{transaction.stockName}</p>
            <p class={`text-white py-1 w-fit mx-auto my-0  px-2 rounded ${transaction.isBuy ? 'bg-green-500' : 'bg-red-500'}`}>
              {transaction.isBuy ? `Bought ${transaction.quantity} share` : `Sold ${transaction.quantity} share`}
            </p>
            <div class="mt-2">
              <p class="text-white">Price: {transaction.price} INR</p>
              <p class="text-white">Time: {new Date(transaction.time).toLocaleString()}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Transaction

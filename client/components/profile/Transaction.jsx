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
    <div class="bg-gray-800 mt-4 text-center mx-20 p-4 rounded-lg shadow-lg text-white">
      <h2 class="text-xl font-semibold mb-4">Transaction</h2>
      {transactions.map((transaction, index) => {
        return (
          <div key={index} class="mb-4">
            <p class="font-light text-white">{transaction.stockName}</p>
            {transaction.isBuy && (
              <p class="font-light text-white">
                Bought {transaction.quantity} share at price {transaction.price} INR
              </p>
            )}
            {!transaction.isBuy && (
              <p class="font-light text-white">
                Sold {transaction.quantity} share at price {transaction.price} INR
              </p>
            )}
            <p class="font-light text-white">Time: {transaction.time}</p>
            <hr class="border-white" />
          </div>
        )
      })}
    </div>
  )
}

export default Transaction

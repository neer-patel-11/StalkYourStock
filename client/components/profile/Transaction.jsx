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
    <div>
      {transactions.map((transaction, index) => {
        return (
          <div key={index}>
            <p>{transaction.stockName}</p>
            {transaction.isBuy && (
              <p>
                Bought {transaction.quantity} share of price {transaction.price}
              </p>
            )}
            {!transaction.isBuy && (
              <p>
                Sold {transaction.quantity} share of price {transaction.price}
              </p>
            )}
            <p>{transaction.time}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Transaction

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Portfolio = () => {
  // const [userData, setUserData] = useState({})
  const [portfoilo, setPortfolio] = useState({})
  useEffect(() => {
    axios.get('http://localhost:8080/portfolio/get?email=' + localStorage.getItem('email')).then((response) => {
      console.log(response.data.portfolio)
      setPortfolio(response.data.portfolio)
      // setUserData(response.data.userData)
    })
  }, [])
  return (
    <div>
      <p>{portfoilo.stockName}</p>
      <p>{portfoilo.currentBuyings}</p>
      <p>{portfoilo.currentQuantity}</p>
    </div>
  )
}

export default Portfolio

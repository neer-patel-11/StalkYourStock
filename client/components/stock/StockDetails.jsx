'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StockChart from './StockChart'
import StockTextDetails from './StockTextDetails'
import { Button } from '@mantine/core'

const StockDetails = () => {
  const [showDetails, setShowDetails] = useState(true)
  const [name, setName] = useState('TATACHEM')

  const toggleButton = () => {
    if (showDetails) document.querySelector('#btn').innerHTML = 'See Details'
    else document.querySelector('#btn').innerHTML = 'See Chart'

    setShowDetails((prev) => {
      return !prev
    })
  }

  useEffect(() => {
    const getNames = async () => {
      console.log('hello')
      axios
        .get('http://localhost:8080/stock/name')
        .then((response) => {
          // console.log(JSON.stringify(response.data.parsedData[0]));
          for (let index = 1; index < response.data.parsedData.length; index++) {
            var option = document.createElement('option')
            option.text = response.data.parsedData[index]
            option.value = response.data.parsedData[index]
            document.getElementById('stockSymbol').appendChild(option)
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
    getNames()
  }, [])

  const getStockDetails = (e) => {
    e.preventDefault()
    setName(document.querySelector('#stockSymbol').value)
  }

  return (
    <>
      <div className="my-15 flex items-center flex-col">
        <div class="flex justify-center items-center flex-col">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center items-center flex-col" onSubmit={getStockDetails}>
            <div class="mb-4 text-center">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="stockSymbol">
                Company Name
              </label>
              <select
                class="shadow text-center appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="stockSymbol"
                id="stockSymbol"></select>
            </div>
            <div class="flex items-center justify-between">
              <Button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </Button>
            </div>
          </form>

          <Button
            id="btn"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={toggleButton}>
            See Chart
          </Button>
        </div>

        {showDetails && <StockTextDetails name={name} />}
      </div>
      {!showDetails && <StockChart name={name} />}
    </>
  )
}

export default StockDetails

'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StockChart from './StockChart'
import StockTextDetails from './StockTextDetails'
import { Button } from '@mantine/core'

const StockDetails = () => {
  const [showDetails, setShowDetails] = useState(true)
  const [name, setName] = useState('20MICRONS')

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
        <div className="flex justify-center mt-24 items-center flex-col">
          <form
            className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
 px-8 pt-6 pb-8 mb-4 flex justify-center items-center flex-col"
            onSubmit={getStockDetails}>
            <div className="mb-4 text-center">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="stockSymbol">
                Company Name
              </label>
              <select
                className="shadow text-center appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="stockSymbol"
                id="stockSymbol"></select>
            </div>
            <div className="flex items-center justify-between">
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </Button>
            </div>
          </form>

          <Button
            id="btn"
            className="bg-green-500 mb-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

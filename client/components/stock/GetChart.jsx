import React from 'react'
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import moment from 'moment'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js'
//     import { Bar } from 'react-chartjs-2';
import ZoomPlugin from 'chartjs-plugin-zoom'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, ZoomPlugin)

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Stock price per day'
    },
    plugins: {
      pan: {
        enabled: true,
        mode: 'x'
      },
      limits: {
        x: { min: 5, max: 7 }
      },
      zoom: {
        pan: {
          enabled: true
        }
      }
    }
  }
}

const GetChart = (props) => {
  let labels = props.data
  labels = labels.map((items) => {
    return moment(items.date).utc().format('YYYY-MM-DD')
  })

  let prices = props.data
  prices = prices.map((items) => {
    return items.price
  })

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Price',
        backgroundColor: '#81c995',
        borderColor: '#81c995',
        data: prices
      }
    ]
  }

  return (
    <>
      <div className="bg-[#17181C] h-screen">
        <Line options={options} data={data} />
      </div>
    </>
  )
}

export default GetChart

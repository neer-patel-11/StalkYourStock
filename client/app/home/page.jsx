'use client'
import React from 'react'
import Nav from '../Nav' // Import your Nav component
import { block } from 'million'

const HomePage = block(() => {
  return (
    <div className="bg-gray-900 text-white p-10">
      <Nav />
      <div className="container mx-auto text-center py-16">
        <h1 className="text-5xl font-semibold mb-4">
          Welcome to <span className="text-yellow-500 font-bold">Stalk</span> <span className="text-blue-500 font-bold">Your</span>{' '}
          <span className="text-green-500 font-bold">Stock</span>
        </h1>

        <p className="text-xl mb-8">Learn, Invest, and Grow Your Portfolio</p>
        <a
          href="/start-trading"
          className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out">
          Get Started
        </a>
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Learn and Practice</h2>
            <p className="text-gray-400 mb-4">
              Use our simulator to learn about stock market trading and practice with virtual money. Access a wide range of educational resources, articles, and
              video tutorials.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Invest Wisely</h2>
            <p className="text-gray-400 mb-4">
              Make informed investment decisions, explore different stocks, and track your portfolio's performance. Stay updated with real-time stock data,
              news, and market trends.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <h2 className="text-4xl font-semibold mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add featured articles here */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">How to Diversify Your Investment Portfolio</h3>
            <p className="text-gray-400">Learn the importance of diversification and strategies to spread your investments effectively.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Understanding Stock Market Volatility</h3>
            <p className="text-gray-400">Discover the factors contributing to stock market volatility and how to navigate through turbulent times.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Top Stock Picks for 2023</h3>
            <p className="text-gray-400">Explore the top stocks that experts are recommending for this year and make informed investment choices.</p>
          </div>
        </div>
      </div>
    </div>
  )
})
export default HomePage

'use client'
import React, { useState, useEffect } from 'react'
import StockDetails from '@components/stock/StockDetails'
// import LiveStock from '@components/LiveStock'
// import Stock from '@components/Stock'
// import StockChart from '@components/StockChart'
import Profile from '@components/profile/Profile'
import Portfolio from '@components/profile/Portfolio'
import Transaction from '@components/profile/Transaction'

export default function Home() {
  return (
    <div>
      {/* <Portfolio></Portfolio> */}
      <Transaction></Transaction>
    </div>
  )
}

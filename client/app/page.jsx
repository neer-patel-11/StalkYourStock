'use client'
import React, { useState, useEffect } from 'react'
import StockDetails from '@components/stock/StockDetails'
// import LiveStock from '@components/LiveStock'
// import Stock from '@components/Stock'
// import StockChart from '@components/StockChart'
import Profile from '@components/profile/Profile'
import Portfolio from '@components/profile/Portfolio'

export default function Home() {
  return (
    <div>
      <Portfolio></Portfolio>
    </div>
  )
}

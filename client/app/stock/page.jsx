'use client'
import React, { useState, useEffect } from 'react'
import StockDetails from '@components/stock/StockDetails'
import Nav from '../Nav'
import PaticlesBackground from '@components/PaticlesBackground'

export default function Home() {
  return (
    <>
      <PaticlesBackground></PaticlesBackground>
      
      <Nav></Nav>

      <StockDetails />
    </>
  )
}

'use client'
import React, { useState, useEffect } from 'react'
import StockDetails from '@components/stock/StockDetails'
import Nav from '../Nav'

export default function Home() {
  return (
    <>
      <Nav></Nav>

      <StockDetails />
    </>
  )
}

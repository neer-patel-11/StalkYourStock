'use client'
import React, { useState, useEffect } from 'react'
import Transaction from '@components/profile/Transaction'
import Nav from '../Nav'
import PaticlesBackground from '@components/PaticlesBackground'
import { block } from 'million'

const Home = block(() => {
  return (
    <>
      <PaticlesBackground></PaticlesBackground>

      <Nav></Nav>

      <Transaction />
    </>
  )
})
export default Home

'use client'
import React, { useState, useEffect } from 'react'
import Portfolio from '@components/profile/Portfolio'
import Nav from '../Nav'
import PaticlesBackground from '@components/PaticlesBackground'
import { block } from 'million'

const Home = block(() => {
  return (
    <>
      <PaticlesBackground></PaticlesBackground>
      <Nav></Nav>

      <Portfolio />
    </>
  )
})

export default Home

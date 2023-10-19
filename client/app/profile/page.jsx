'use client'
import React, { useState, useEffect } from 'react'
import Profile from '@components/profile/Profile'
import Nav from '../Nav'
import PaticlesBackground from '@components/PaticlesBackground'
import { block } from 'million'

const Home = block(() => {
  return (
    <>
      <PaticlesBackground></PaticlesBackground>
      <Nav></Nav>

      <Profile />
    </>
  )
})
export default Home

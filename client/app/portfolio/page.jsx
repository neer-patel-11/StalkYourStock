'use client'
import React, { useState, useEffect } from 'react'
import Portfolio from '@components/profile/Portfolio'
import Nav from '../Nav'
import PaticlesBackground from '@components/PaticlesBackground'

export default function Home() {
  return (
    <>
      <PaticlesBackground></PaticlesBackground>
      <Nav></Nav>

      <Portfolio />
    </>
  )
}

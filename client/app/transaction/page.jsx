'use client'
import React, { useState, useEffect } from 'react'
import Transaction from '@components/profile/Transaction'
import Nav from '../Nav'
import PaticlesBackground from '@components/PaticlesBackground'

export default function Home() {
  return (
    <>
      <PaticlesBackground></PaticlesBackground>

      <Nav></Nav>

      <Transaction />
    </>
  )
}

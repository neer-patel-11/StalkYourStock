'use client'
import React, { useState, useEffect } from 'react'
import Portfolio from '@components/profile/Portfolio'
import Nav from '../Nav'

export default function Home() {
  return (
    <>
      <Nav></Nav>

      <Portfolio />
    </>
  )
}

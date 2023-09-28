'use client'
import React, { useState, useEffect } from 'react'
import Profile from '@components/profile/Profile'
import Nav from '../Nav'
import PaticlesBackground from '@components/PaticlesBackground'

export default function Home() {
  return (
    <>
      <PaticlesBackground></PaticlesBackground>
    
      <Nav></Nav>

      <Profile />
    </>
  )
}

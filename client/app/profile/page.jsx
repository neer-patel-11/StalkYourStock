'use client'
import React, { useState, useEffect } from 'react'
import Profile from '@components/profile/Profile'
import Nav from '../Nav'

export default function Home() {
  return (
    <>
      <Nav></Nav>

      <Profile />
    </>
  )
}

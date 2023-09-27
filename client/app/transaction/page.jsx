'use client'
import React, { useState, useEffect } from 'react'
import Transaction from '@components/profile/Transaction'
import Nav from '../Nav'

export default function Home() {
  return (
    <>
      <Nav></Nav>

      <Transaction />
    </>
  )
}

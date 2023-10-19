'use client'
import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { push } = useRouter()
  useEffect(() => {
    push('/home')
  }, [])
  return <div>{/* <Nav></Nav> */}</div>
}

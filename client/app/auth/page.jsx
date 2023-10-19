'use client'
import React, { useState } from 'react'
import '../../styles/styles.css'

import Login from '@components/auth/Login'
import Register from '@components/auth/Register'
import PaticlesBackground from '@components/PaticlesBackground'
import { block } from 'million'

export default block(function Home() {
  const [type, setType] = useState('signIn')
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text)
      return
    }
  }
  const containerClass = 'auth-container ' + (type === 'signUp' ? 'right-panel-active' : '')
  return (
    <div className="auth-body">
      <PaticlesBackground></PaticlesBackground>

      <div className="auth-app">
        <div className={containerClass} id="container">
          <Login />
          <Register />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn" onClick={() => handleOnClick('signIn')}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost " id="signUp" onClick={() => handleOnClick('signUp')}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useToggle, upperFirst } from '@mantine/hooks'
import { TextInput, PasswordInput, Text, Paper, Group, PaperProps, Button, Divider, Checkbox, Anchor, Stack, MantineProvider, Box } from '@mantine/core'
import { useRouter } from 'next/navigation'
// import "@styles/Login.css";
import { Toaster, toast } from 'react-hot-toast'

const Login = (props) => {
  const { push } = useRouter()
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const handleChange = (evt) => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const reqData = state
    axios
      .post('http://localhost:8080/user/login', reqData)
      .then((response) => {
        if (response.data.msg) {
          toast.error(response.data.msg)
        } else {
          localStorage.setItem('email', response.data.email)
          push('/home')
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  const handleAuth = () => {
    props.toggleLogin()
  }
  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>

        <div className="grid grid-cols-1 gap-3 my-5">
          <input type="email" placeholder="Email" name="email" value={state.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} />
        </div>
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default Login

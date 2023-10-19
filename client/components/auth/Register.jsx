'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import '@styles/Register.css'
import { TextInput, PasswordInput, Text, Paper, Group, PaperProps, Button, Divider, Checkbox, Anchor, Stack, MantineProvider, Box, Grid } from '@mantine/core'
import toast, { Toaster } from 'react-hot-toast'

const Register = (props) => {
  const [msg, setMsg] = useState([])

  const [state, setState] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    const reqData = state
    axios
      .post('http://localhost:8080/user/register', reqData)
      .then((response) => {
        setMsg(response.data.msg)
        console.log(response.data.msg)
        if (response.data.status != 404) toast.success(response.data.msg)
        else toast.error(response.data.msg)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
    setState({ fname: '', lname: '', email: '', phone: '', address: '', city: '', state: '', country: '', pincode: '', password: '' })
  }

  const handleAuth = () => {
    props.toggleLogin()
  }

  return (
    <>
      <Toaster />
      <div className="form-container sign-up-container">
        <form onSubmit={handleOnSubmit}>
          <h1>Create Account</h1>

          <div className="grid grid-cols-2 gap-2 my-3">
            <input type="text" name="fname" value={state.fname} onChange={handleChange} placeholder="First Name" />
            <input type="text" name="lname" value={state.lname} onChange={handleChange} placeholder="Last Name" />
            <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Email" />
            <input type="text" name="phone" value={state.phone} onChange={handleChange} placeholder="Phone Number" />
            <input type="text" name="address" value={state.address} onChange={handleChange} placeholder="Address" />
            <input type="text" name="city" value={state.city} onChange={handleChange} placeholder="City" />
            <input type="text" name="state" value={state.state} onChange={handleChange} placeholder="State" />
            <input type="text" name="country" value={state.country} onChange={handleChange} placeholder="Country" />
            <input type="text" name="pincode" value={state.pincode} onChange={handleChange} placeholder="Pin Code" />
            <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Password" />
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </>
  )
}

export default Register

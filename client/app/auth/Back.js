import React, { Component } from 'react'
import { Button } from '@mantine/core'

import '../../node_modules/react-dat-gui/build/react-dat-gui.css'
import DatGui, { DatNumber, DatSelect, DatButton } from 'react-dat-gui'

import Register from '@components/auth/Register'
import Login from '@components/auth/Login'

import FluidAnimation from './react-fluid-animation'
import random from 'random'

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005
}

export default class Back extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }

    this.toggleLogin = this.toggleLogin.bind(this)
  }

  state = {
    config: {
      ...defaultConfig
    }
  }

  componentDidMount() {
    this._reset()
  }

  toggleLogin() {
    console.log(this.state.isLogin)
    this.setState({ isLogin: !this.state.isLogin })

    // if (this.isLogin) {
    //   document.getElementById("toggle").innerHTML = "Login";
    // } else {
    //   document.getElementById("toggle").innerHTML = "Register";
    // }
  }

  render() {
    const { config } = this.state

    return (
      <div
        style={{
          height: '100vh'
        }}>
        <FluidAnimation config={config} animationRef={this._animationRef} />

        <div
          style={{
            position: 'absolute',
            zIndex: 2,
            top: 150,
            left: '35em',
            // right: 0,
            // bottom: 0,
            // padding: "1em",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
            // color: "#fff",
            // fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            // pointerEvents: "none"
          }}>
          {this.state.isLogin && <Login auth="Register" toggleLogin={this.toggleLogin} />}

          {!this.state.isLogin && <Register auth="Login" toggleLogin={this.toggleLogin} />}
          {!this.state.isLogin && (
            <button className="text-white" onClick={this.toggleLogin}>
              Already Have an account, Login here...
            </button>
          )}
          {this.state.isLogin && (
            <button className="text-white" onClick={this.toggleLogin}>
              Are you a newbie? Sign up here...
            </button>
          )}
        </div>
      </div>
    )
  }

  _animationRef = (ref) => {
    this._animation = ref
    this._reset()
  }

  _onUpdate = (config) => {
    this.setState({ config })
  }

  _onClickRandomSplats = () => {
    this._animation.addSplats((5 + Math.random() * 20) | 0)
  }

  _onReset = () => {
    this.setState({ config: { ...defaultConfig } })
  }

  _reset() {
    if (this._animation) {
      this._animation.addRandomSplats(random.int(100, 180))
    }
  }
}

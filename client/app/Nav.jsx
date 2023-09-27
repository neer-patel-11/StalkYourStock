'use client'
import React, { useState, useEffect } from 'react'
import '../styles/nav.css'
// import { Link } from "react-router-dom";
import axios from 'axios'
// import { useDispatch } from "react-redux";

const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  // const dispatch = useDispatch();

  function toggleDropdown() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <section id="nav">
        <div className="nav">
          <div className="pl-0">
            <a href="#top">
              <img src="../../public/connect.png" className="w-36" alt="" />
            </a>
          </div>
          <div>
            <div className="hidden md:flex flex-wrap gap-0">
              <div className="nav-titles nav-titles-ltr">
                <a href="/home">Home</a>
              </div>
              <div className="nav-titles nav-titles-ltr">
                <a href="/profile">Profile</a>
              </div>
              <div className="nav-titles nav-titles-ltr">
                <a href="/portfolio">Portfolio</a>
              </div>

              <div className="nav-titles nav-titles-ltr">
                <a href="/transaction">Transaction</a>
              </div>
              <div className="nav-titles nav-titles-ltr">
                <a href="/stock">Stock</a>
              </div>

              {/* {!props.isLoggedIn && (
                <div className="nav-titles nav-titles-ltr">
                  <Link to="/register">Register</Link>
                </div>
              )}

              {props.isLoggedIn && (
                <div className="nav-titles nav-titles-ltr" onClick={logout}>
                  Logout
                </div>
              )} */}
            </div>

            <div className="relative">
              <button className="dropdown-toggle text-3xl md:hidden text-white cursor-pointer" onClick={toggleDropdown}>
                &#9776;
              </button>
              {isOpen && (
                <div className="dropdown-menu nav-dropdown">
                  <a href="#" className="nav-dropdown-titles">
                    QueryRoom
                  </a>
                  <a href="#" className="nav-dropdown-titles">
                    Blogs
                  </a>
                  <a href="#" className="nav-dropdown-titles">
                    Notes
                  </a>
                  <a href="#" className="nav-dropdown-titles">
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nav

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../styles/profile.css'

const Profile = () => {
  const [userData, setUserData] = useState({})
  useEffect(() => {
    axios.get('http://localhost:8080/user/profile?email=' + localStorage.getItem('email')).then((response) => {
      console.log(response.data.userData)
      setUserData(response.data.userData)
    })
  }, [])

  return (
    <div className="p-4 md:p-8 lg:p-16 h-screen bg-black">
      <div className=" mt-8 md:mt-24 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100 p-10 shadow-[0_0px_25px_rgba(8,_112,_184,_0.7)] md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="order-2 md:order-1 text-center md:mt-4 mt-10 ">
            <div>
              <h1 className="text-4xl font-medium text-white md:mt-0 mt-[100px]">
                {userData.fname} {userData.lname}
              </h1>
              <p className="font-light text-white mt-3">{userData.address}</p>
            </div>
          </div>
          {/* <div className="order-2 md:order-1 text-center md:mt-4 mt-10 ">
            <div>
              <h1 className="text-4xl font-medium text-white md:mt-0 mt-[100px]">
                {userData.fname} {userData.lname}
              </h1>
              <p className="font-light text-white mt-3">{userData.address}</p>
            </div>
          </div> */}
          <div className="relative ">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"></div>
          </div>
        </div>
        <div className="space-x-8 flex justify-between mt-6  md:justify-center">
          <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 text-md">
            Logout
          </button>
        </div>
      </div>
    </div>

    // <div>
    //   <p>{userData.fname}</p>
    //   <p>{userData.lname}</p>
    //   <p>{userData.email}</p>
    //   <p>{userData.phone}</p>
    //   <p>{userData.city}</p>
    //   <p>{userData.state}</p>
    //   <p>{userData.country}</p>
    //   <p>{userData.pincode}</p>
    //   <p>{userData.address}</p>
    // </div>
  )
}

export default Profile

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../styles/profile.css'
import { Modal } from 'react-responsive-modal'
import toast, { Toaster } from 'react-hot-toast'

const Profile = () => {
  const [userData, setUserData] = useState({})
  const [myModal, setMyModal] = useState(false)
  const toggleModal = () => {
    setMyModal(!myModal)
  }
  const [updatedData, setUpdatedData] = useState({})
  useEffect(() => {
    axios.get('http://localhost:8080/user/profile?email=' + localStorage.getItem('email')).then((response) => {
      console.log(response.data.userData)
      setUserData(response.data.userData)
      setUpdatedData(response.data.userData)
    })
  }, [])

  const changeHandler = (e) => {
    const { name, value } = e.target
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = updatedData
    console.log(userData)
    axios.post('http://localhost:8080/user/updateProfile', userData).then((response) => {
      console.log(response.data.msg)
      setUserData(userData)
      toast.success('Profile updated successfully!')
    })
    console.log(updatedData)
    toggleModal()
  }

  return (
    <div className="p-4 md:p-8 lg:p-16 h-screen">
      <Toaster />

      <div className=" mt-8 md:mt-24  bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 p-10 shadow-[0_0px_25px_rgba(8,_112,_184,_0.7)] md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="order-2 md:order-1 text-center md:mt-4 mt-10 ">
            <div>
              <h1 className="text-4xl font-medium text-white md:mt-0 mt-[100px]">
                {userData.fname} {userData.lname}
              </h1>
              <div className="flex justify-center">
                <div className="text-right mr-4">
                  <p className="font-light text-white mt-3">Address:</p>
                  <p className="font-light text-white mt-3">Email:</p>
                  <p className="font-light text-white mt-3">Phone No:</p>
                  <p className="font-light text-white mt-3">City:</p>
                  <p className="font-light text-white mt-3">State:</p>
                  <p className="font-light text-white mt-3">Country:</p>
                  <p className="font-light text-white mt-3">Pincode:</p>
                </div>
                <div className="text-left">
                  <p className="font-light text-white mt-3">{userData.address}</p>
                  <p className="font-light text-white mt-3">{userData.email}</p>
                  <p className="font-light text-white mt-3">{userData.phone}</p>
                  <p className="font-light text-white mt-3">{userData.city}</p>
                  <p className="font-light text-white mt-3">{userData.state}</p>
                  <p className="font-light text-white mt-3">{userData.country}</p>
                  <p className="font-light text-white mt-3">{userData.pincode}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img src="/images/crop1.jpg" className="rounded-full object-cover h-full w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
      {!myModal && (
        <div className="flex justify-center mt-5">
          <button className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded" onClick={toggleModal}>
            Update Profile
          </button>
        </div>
      )}
      {myModal && (
        <div className="modal-container flex flex-col justify-center items-center mt-5 bg-transparent text-white">
          <button className="bg-red-500 text-white hover:bg-red-700 py-2 px-4 rounded" onClick={toggleModal}>
            Cancel
          </button>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 mb-5">
            <input
              className="text-sm w-96 px-4 py-2 border border-solid border-gray-600 rounded mt-4 bg-gray-700 text-white"
              type="text"
              placeholder="First Name"
              name="fname"
              defaultValue={updatedData.fname}
              onChange={changeHandler}
              required
            />
            <input
              className="text-sm w-96 px-4 py-2 border border-solid border-gray-600 rounded mt-4 bg-gray-700 text-white"
              type="text"
              placeholder="Last Name"
              name="lname"
              onChange={changeHandler}
              defaultValue={updatedData.lname}
              required
            />
            <input
              className="text-sm w-96 px-4 py-2 border border-solid border-gray-600 rounded mt-4 bg-gray-700 text-white"
              type="text"
              placeholder="Phone No"
              onChange={changeHandler}
              defaultValue={updatedData.phone}
              name="phone"
              required
            />
            <input
              className="text-sm w-96 px-4 py-2 border border-solid border-gray-600 rounded mt-4 bg-gray-700 text-white"
              type="text"
              placeholder="Landmark"
              onChange={changeHandler}
              name="address"
              defaultValue={updatedData.address}
              required
            />
            <input
              className="text-sm w-96 px-4 py-2 border border-solid border-gray-600 rounded mt-4 bg-gray-700 text-white"
              type="text"
              defaultValue={updatedData.city}
              onChange={changeHandler}
              placeholder="City"
              name="city"
              required
            />
            <input
              className="text-sm w-96 px-4 py-2 border border-solid border-gray-600 rounded mt-4 bg-gray-700 text-white"
              type="text"
              placeholder="State"
              onChange={changeHandler}
              defaultValue={updatedData.state}
              name="state"
              required
            />
            <input
              className="text-sm w-96 px-4 py-2 border border-solid border-gray-600 rounded mt-4 bg-gray-700 text-white"
              type="text"
              placeholder="Country"
              name="country"
              onChange={changeHandler}
              defaultValue={updatedData.country}
              required
            />
            <input
              className="text-sm w-96 px-4 py-2 border border-solid border-gray-600 rounded mt-4 bg-gray-700 text-white"
              required
              type="text"
              placeholder="Pin Code"
              onChange={changeHandler}
              defaultValue={updatedData.pincode}
              name="pincode"
            />
            <button className="bg-green-500 text-white hover:bg-green-700 py-2 px-4 rounded mt-4" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Profile

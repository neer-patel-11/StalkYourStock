"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "@styles/Register.css";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  MantineProvider,
  Box,
  Grid,
} from "@mantine/core";

const Register = (props) => {
  const [msg, setMsg] = useState([]);

  const initialFormData = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const reqData = formData;
    axios
      .post("http://localhost:8080/user/register", reqData)
      .then((response) => {
        setMsg(response.data.msg);
        console.log(response.data.msg);
        setFormData(initialFormData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleAuth = () => {
    props.toggleLogin();
  };

  return (
    <>
       <MantineProvider theme={{ colorScheme: "white" }}>
      <Box maw={450} mx="xl">
        <Paper radius="md" p="xl" withBorder>
          <Text size="lg" weight={500}>
           Sign UP
          </Text>

          <form onSubmit={handleSubmit}>
        <Grid>
            {/* <Stack> */}
        <Grid.Col span={6}>


            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="text"
              placeholder="First Name"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="text"
              placeholder="Last Name"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="text"
              placeholder="Phone No"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="text"
              placeholder="Landmark"
              name="address"
              value={formData.address}
              onChange={handleChange}
              />
              </Grid.Col>
              <Grid.Col span={6}>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="text"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              />

            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="text"
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="text"
              placeholder="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="text"
              placeholder="Pin Code"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
              </Grid.Col>
            {/* </Stack> */}

              </Grid>
          </form>
        </Paper>
      </Box>
    </MantineProvider>
    </>
    // <div className="loginContainer">
    //   <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
       
    //     <div className="md:w-1/3 max-w-sm">
         
      
    //       <form className="grid grid-cols-2 gap-3 w-96" onSubmit={handleSubmit}>
            // <input
            //   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            //   type="text"
            //   placeholder="First Name"
            //   name="fname"
            //   value={formData.fname}
            //   onChange={handleChange}
            // />
            // <input
            //   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            //   type="text"
            //   placeholder="Last Name"
            //   name="lname"
            //   value={formData.lname}
            //   onChange={handleChange}
            // />
            // <input
            //   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            //   type="email"
            //   placeholder="Email"
            //   name="email"
            //   value={formData.email}
            //   onChange={handleChange}
            // />
            // <input
            //   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            //   type="text"
            //   placeholder="Phone No"
            //   name="phone"
            //   value={formData.phone}
            //   onChange={handleChange}
            // />
            // <input
            //   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            //   type="text"
            //   placeholder="Landmark"
            //   name="address"
            //   value={formData.address}
            //   onChange={handleChange}
            // />
            // <input
            //   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            //   type="text"
            //   placeholder="City"
            //   name="city"
            //   value={formData.city}
            //   onChange={handleChange}
            // />
            // <input
            //   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            //   type="text"
            //   placeholder="State"
            //   name="state"
            //   value={formData.state}
            //   onChange={handleChange}
            // />
            // <input
            //   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            //   type="text"
            //   placeholder="Country"
            //   name="country"
            //   value={formData.country}
            //   onChange={handleChange}
            // />
            // <input
            //   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            //   type="text"
            //   placeholder="Pin Code"
            //   name="pincode"
            //   value={formData.pincode}
            //   onChange={handleChange}
            // />
            // <input
            //   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            //   type="password"
            //   placeholder="Password"
            //   name="password"
            //   value={formData.password}
            //   onChange={handleChange}
            // />
    //         <div className="text-center md:text-left">
              // <button
              //   className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              //   type="submit"
              // >
              //   Register
              // </button>
    //         </div>
    //       </form>

       
    //     </div>
    //   </section>


    // </div>
  );
};

export default Register;

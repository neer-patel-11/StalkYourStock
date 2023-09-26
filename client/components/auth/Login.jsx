"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToggle, upperFirst } from "@mantine/hooks";
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
} from "@mantine/core";
// import "@styles/Login.css";

const Login = (props) => {
  const [msg, setMsg] = useState([]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqData = formData;
    axios
      .post("http://localhost:8080/user/login", reqData)
      .then((response) => {
        setMsg(response.data.msg);
        localStorage.setItem("email", response.data.email);
        // console.log(response.data.msg);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleAuth = () => {
    props.toggleLogin();
  };
  return (
    <MantineProvider theme={{ colorScheme: "white" }}>
      <Box maw={720} mx="xl">
        <Paper radius="md" p="xl" withBorder>
          <Text size="lg" weight={500}>
           Login Please
          </Text>


          <form onClick={handleSubmit}>
            
              <TextInput
                required
                label="Email"
                placeholder="hello@mantine.dev"
                radius="md"
                name="email"
                onChange={handleChange}
              />

              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                radius="md"
                name="password"
                onChange={handleChange}
              />
            
            
          </form>
        </Paper>
      </Box>
    </MantineProvider>
  );
};

export default Login;

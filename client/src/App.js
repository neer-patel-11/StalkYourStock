import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    const reqData = formData;
    axios.post('http://localhost:8080/user/login',reqData)
    .then(response => {
      setData(response.data);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
};

  // useEffect(() => {
  //   // Make an HTTP GET request to your Node.js backend
  //   axios.get('http://localhost:8080/index') // Replace with your actual API endpoint
  //     .then(response => {
  //       setData(response.data); // Update the state with the received data
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <div>
      <h1>Data from Node.js Backend</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      
      <form onSubmit={handleSubmit} method="post">
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;

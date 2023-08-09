import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [state, setState] = useState({
    results: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = formData;
    console.log(data);
    fetch('http://localhost:8080/submit',{

      method: 'POST',

      headers :{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      },
      body : data
    })
      .then(
        (response) => {
          console.log(response);
          return response.json().then((results)=>setState({ results: results }));

        } // if the response is a JSON object
      ).then(
      success =>console.log(success) // Handle the success response object
    ).catch(
      error => null // Handle the error response object
    )

  };

  return (
    <div className="App">
      <h1>React Node.js Form Example</h1>
      <form onSubmit={handleSubmit}>
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
      <div>
      <div>this is my result: {state.results}</div>
      </div>
    </div>
  );
}

export default App;


// App.tsx

import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:10000/register', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [customerId, setCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer ID:', customerId);
    console.log('Customer Name:', customerName);
    alert(`Welcome, ${customerName}!`);
    // Add your logic here (e.g., API call)
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Customer Login</h2>
        <div className="input-group">
          <label>Customer ID</label>
          <input
            type="text"
            placeholder="Enter Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Customer Name</label>
          <input
            type="text"
            placeholder="Enter Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

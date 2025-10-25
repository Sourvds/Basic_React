import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [values, setValues] = useState({
    cust_id:'',
    cust_name:'',
    cust_address:'',
    cust_amount:''
  });

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/create', values)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      navigate('/home')
  }

  return (
    <div className='main'>
      <div className='sub-main'>
        <form onSubmit={handleSubmit}>
          <h2>Add Customer</h2>

          <div className='mb-2'>
            <label htmlFor="">Customer ID</label>
            <input
              type="text"
              placeholder="Enter Id"
              className="form-control"
              onChange={(e) => setValues({ ...values, cust_id: e.target.value })}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setValues({ ...values, cust_name: e.target.value })}
            />
          </div>

           <div className='mb-2'>
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="form-control"
              onChange={(e) => setValues({ ...values, cust_address: e.target.value })}
            />
          </div>

           <div className='mb-2'>
            <label htmlFor="">Amount</label>
            <input
              type="number"
              placeholder="Enter Amount"
              className="form-control"
              onChange={(e) => setValues({ ...values, cust_amount: e.target.value })}
            />
          </div>

          <button id='submit' type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
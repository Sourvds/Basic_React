import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Home.css';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8081/')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div id ="t_out">
      <table id = "table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.cust_id}</td>
                <td>{item.cust_name}</td>
                <td>{item.cust_address}</td>
                <td>{item.cust_amount}</td>

                <td className="actionbtn">
                  <Link to ={`/read/${item.cust_id}`}>Read</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default Home;


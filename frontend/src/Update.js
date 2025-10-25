import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './Update.css';
const Update = () => {
  const { cust_id } = useParams();
  const [customer, setCustomer] = useState({
    cust_id: "",
    cust_name: "",
    cust_address: "",
    cust_amount: 0
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .put(`http://localhost:8081/read/${cust_id}`, customer)
    .then((res) => {
      console.log(res);
      navigate("/home");
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + cust_id)
      .then((res) => {
        console.log(res);
        setCustomer(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [cust_id]);

  return (
    <div className="body">
      <div className="sub-main">
        <form onSubmit={handleSubmit}>
          <h2>Update Customer</h2>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Enter Id"
              className="form-control"
              name="cust_id"
              readOnly={true}
              value={customer.cust_id}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              name="cust_name"
              value={customer.cust_name}
              onChange={(e) =>
                setCustomer({ ...customer, cust_name: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Enter Address"
              className="form-control"
              name="cust_address"
              value={customer.cust_address}
              onChange={(e) =>
                setCustomer({ ...customer, cust_address: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Enter amount"
              className="form-control"
              name="cust_amount"
              value={customer.cust_amount}
              onChange={(e) =>
                setCustomer({ ...customer, cust_amount: e.target.value })
              }
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
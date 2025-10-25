import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { cust_id } = useParams();
  const [customer, setCustomer] = useState({
    cust_id: "",
    cust_name: "",
    cust_address: "",
    cust_amount: 0
  });
  const navigate = useNavigate();

  // Fetch existing customer by id
  useEffect(() => {
    axios
      .get(`http://localhost:8081/read/${cust_id}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setCustomer(res.data[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [cust_id]);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8081/update/${cust_id}`, customer)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="body">
      <div className="sub-main">
        <form onSubmit={handleSubmit}>
          <h2>Edit Customer</h2>
          
          <div className="mb-2">
            <input
              type="text"
              name="cust_id"
              value={customer.cust_id}
              readOnly
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <input
              type="text"
              name="cust_name"
              placeholder="Enter Name"
              value={customer.cust_name}
              onChange={(e) =>
                setCustomer({ ...customer, cust_name: e.target.value })
              }
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <input
              type="text"
              name="cust_address"
              placeholder="Enter Address"
              value={customer.cust_address}
              onChange={(e) =>
                setCustomer({ ...customer, cust_address: e.target.value })
              }
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <input
              type="number"
              name="cust_amount"
              placeholder="Enter Amount"
              value={customer.cust_amount}
              onChange={(e) =>
                setCustomer({ ...customer, cust_amount: e.target.value })
              }
              className="form-control"
            />
          </div>

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;

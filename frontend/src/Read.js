import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Read.css";

const Read = () => {
  const { cust_id } = useParams();
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + cust_id)
      .then((res) => {
        console.log(res);
        setCustomer(res.data);
      })
      .catch((err) => console.log(err));
  }, [cust_id]);

  const deleteCustomer = () => {
    axios
      .delete(`http://localhost:8081/read/${cust_id}`)
      .then((res) => {
        console.log(res);
        alert("Customer deleted successfully");
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  const updateCustomer = () => {
    navigate(`/update/${cust_id}`);
  };

  return (
    <div className="read-page">
      {customer.length > 0 ? (
        <div className="read-card">
          <div className="read-card__id">ID • {customer[0].cust_id}</div>

          {/* Name */}
          <h2 className="read-card__name">{customer[0].cust_name}</h2>

          {/* Address */}
          <p className="read-card__meta">{customer[0].cust_address}</p>

          {/* Amount */}
          <div className="read-card__info">
            <span>Amount: ₹{customer[0].cust_amount}</span>
          </div>

          {/* Buttons */}
          <div className="read-card__actions">
            <button className="btn btn--delete" onClick={deleteCustomer}>
              Delete
            </button>
            <button className="btn btn--update" onClick={updateCustomer}>
              Update
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Read;

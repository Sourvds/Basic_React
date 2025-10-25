const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
app.use(cors());
app.use(express.json());

// ++++++++++++ To connect with the Database ++++++++++++++++

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "",
    database:"master",
});


// ++++++++++++++++ To put the data into the 8081 port +++++++++++++++++++

app.get("/",(req,res) =>{
    const sql ="select * from customer";
    db.query(sql,(err,data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })
});


app.post("/create", (req, res) => {
  console.log("Received data from frontend:",req.body);
  const sql = "INSERT INTO customer (cust_id,cust_name,cust_address,cust_amount) VALUES (?)";
  const values = [
    req.body.cust_id,
    req.body.cust_name,
    req.body.cust_address,
    req.body.cust_amount
  ];

  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});




app.get('/read/:cust_id',(req,res)=>{
  const sql = "select * from customer where cust_id = ?";
  const cust_id=req.params.cust_id;
  db.query(sql,[cust_id],(err,data)=>{
    if(err) return res.json("Error");
    return res.json(data);
  });
});

app.delete('/read/:cust_id',(req,res)=>{
  const sql = "delete from customer where cust_id = ?";
  const id=req.params.cust_id;
  db.query(sql,[id],(err,data)=>{
    if(err) return res.json("Error");
    return res.json("Deleted Successfully");
  });
});


app.put('/read/:cust_id',(req,res)=>{
  const id=req.params.cust_id;
  const values = req.body;
  const sql = "update customer set ? where cust_id = ?"
  db.query(sql,[values,id],(err,result)=>{
    if(err) {
      console.log(err);
      return res.status(500).json({error: "Database updated failed"})
    }
    res.json({message: "Record updated successfully",result})
  });
});

app.listen(8081,() =>{
        console.log("listening");
});
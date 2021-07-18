const express = require('express');
const router = express.Router()
const db = require('../db')


// create a new employee
router.post("/api/crud", (req, res) => {
    const { name, email, age, country } = req.body;
  
    console.log(name, email);
    db.query(
      "INSERT INTO employee (name, email, age, country) VALUES (?,?,?,?)",
      [name, email, age, country],
      (err, result) => {
        if (err) console.log(err);
        res.json(result);
      }
    );
  });
  
  // get all employee
  router.get("/api/crud", (req, res) => {
    db.query("SELECT * FROM employee", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  });
  
  // delete employee
  router.delete("/api/crud/:id", (req, res) => {
    const id = req.params.id;
  
    db.query("DELETE FROM employee WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ message: "employee deleted", result });
      }
    });
  });
  
  // update employee
  router.put("/api/crud/:id", (req, res) => {
    const id = req.params.id;
    const { name, email, age, country } = req.body;
  
    db.query(
      `UPDATE employee SET name = "${name}", email = "${email}", age = "${age}", country = "${country}"  Where id = ?`,
      id, (err, result)=>{
        if(err){
          return console.log(err);
        }
        return res.json({msg: 'successfully updated.', result})
      }
    );
  });
  

module.exports = router;
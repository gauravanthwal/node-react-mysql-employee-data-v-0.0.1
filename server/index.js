const express = require("express");
const cors = require('cors')
const app = express();
const port = 5000;
const db = require('./db')

// database connection
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


// routes
app.use('/api/crud', require('./routes/employee'))


app.listen(port, () => {
  console.log("server is running at port ", port);
});

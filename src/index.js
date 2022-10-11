const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());

// Database and Models
require("./models/database");

// Routes
app.use(require("./routes/index"));

// Start API
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

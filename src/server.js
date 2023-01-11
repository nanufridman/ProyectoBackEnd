const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 3000;

// Start API
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

app.use(express.json());

// Database and Models
require("./db/db");

// Routes
app.use(require("./routes/index"));
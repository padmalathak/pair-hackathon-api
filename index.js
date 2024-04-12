const express = require("express");
require("dotenv").config;

const cors = require("cors");

const app = express();
const PORT = process.env.port || 8080;

app.use(cors());
app.use(express.json());

const portfolio = require("./routes/data");
app.use("/portfolio", portfolio);

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});

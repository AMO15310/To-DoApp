// const { json } = require("express");
const router = require("./routes");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());
app.use("", router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}....`);
});

const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

// tools
dotenv.config();

// mongoDB
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(colors);

// port
const PORT = process.env.PORT || 8080;

// routes
app.use("/api/v1/auth", require("./Routes/authRoutes"));

// listen
app.listen(PORT, () =>
  console.log(
    `Server is Running in ${process.env.MODE} at Port: ${process.env.PORT}`
      .bgMagenta.bold
  )
);

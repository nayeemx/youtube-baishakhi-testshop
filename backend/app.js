// app.js

const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler"); // Assuming the path is correct
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(cors(
  {
    origin: ["http://localhost:5173"],
    credentials: true,
  }
));
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

// import routes
const user = require("./controller/user");
app.use("/api/v2/users", user);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    res.status(err.statusCode || 500).json({
      status: "error",
      statusCode: err.statusCode || 500,
      message: err.message,
    });
  } else {
    next(err); // Pass the error to the default error handler
  }
});

module.exports = app;

const connectDatabase = require("./db/Database");
const app = require("./app");

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  console.error(err.stack); // Log the stack trace for better debugging
  console.log(`Shutting down the server due to uncaught exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "config/.env",
  });
}

//connect db
connectDatabase();

// Create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Promise Rejection: ${err.message}`);
  console.error(err.stack); // Log the stack trace for better debugging
  console.log(`Shutting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});

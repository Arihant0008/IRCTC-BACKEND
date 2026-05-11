const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet"); // -> simple middleware to add mutiple security headers to our application and it protect our application from common web vulnerabilities.
const { config } = require("./config");
const logger = require(".config/logger"); // -> for logging purpose

const { crosMiddleware } = require("./middlewares/cros.Middleware");
const errorHandler = require("./middlewares/error.Middleware");
const { reqlogger } = require("./middlewares/req.Middleware");
const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(reqlogger);
app.use(crosMiddleware);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from index.js of user-service");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use(errorHandler);


module.exports = app;
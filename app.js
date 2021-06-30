const express = require("express");
const app = express();
const authController = require("./controller/authcontroller");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const Apperror = require("./utils/appError");

app.use(express.json({ limit: "10kb" }));
//security header
app.use(helmet());

//limiter
const limiter = rateLimit({
  max: 5,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP,please try again later",
});

app.use("/", limiter);

////data sanitization
app.use(mongoSanitize());
app.use(xss());

///Routes

app.use("/login", authController.login);
app.use("/signup", authController.signup);

//Exports
module.exports = app;

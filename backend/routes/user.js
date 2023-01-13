const express = require("express");
const { Register, Login } = require("../controlles/user");
const { isAuth } = require("../middlewear/isAuth");
const {
  registerValidator,
  Validation,
  loginValidator,
} = require("../middlewear/validator");
const userRoutes = express.Router();

userRoutes.post("/register", registerValidator, Validation, Register);
userRoutes.post("/login", loginValidator, Validation, Login);
userRoutes.get("/current", isAuth, (req, res) => {
  res.send({ users: req.user });
});
module.exports = userRoutes;

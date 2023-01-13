const { body, validationResult } = require("express-validator");

exports.registerValidator = [
  body("email", "please add a valid email").isEmail(),
  body("pass", "pass must be 6 caracters long").isLength({ min: 6 }),
];

exports.loginValidator = [
  body("email", "please add a valid email").isEmail(),
  body("pass", "pass must be 6 caracters long").isLength({ min: 6 }),
];

exports.Validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};

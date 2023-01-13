const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.Register = async (req, res) => {
  const { email, pass } = req.body;
  try {
    const found = await user.findOne({ email });
    if (found) {
      res.status(400).send({ errors: [{ msg: "user already exists" }] });
    } else {
      const users = new user(req.body);

      // hash password
      const salt = 10;
      const hashpass = bcrypt.hashSync(pass, salt);
      users.pass = hashpass;

      // token
      const key = { id: users._id };
      const token = jwt.sign(key, "hello");
      await users.save();
      res.status(200).send({ msg: "register with success", users, token });
    }
  } catch (error) {
    res.status(500).send("couldn't register");
  }
};
exports.Login = async (req, res) => {
  const { email, pass } = req.body;
  try {
    const users = await user.findOne({ email });
    if (!users) {
      res.status(400).send({ errors: [{ msg: "email not found" }] });
    } else {
      const match = await bcrypt.compare(pass, users.pass);
      if (!match) {
        res.status(400).send({ errors: [{ msg: "wrong password" }] });
      } else {
        const key = { id: users._id };
        const token = jwt.sign(key, "hello");
        res.status(200).send({ msg: "logging", users, token });
      }
    }
  } catch (error) {
    res.status(500).send("couldn't login");
  }
};

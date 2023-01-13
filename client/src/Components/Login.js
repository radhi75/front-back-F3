import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/Action/authAction";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, pass }, navigate));
  };
  return (
    <div>
      <Card
        style={{
          margin: " 4rem auto ",
          width: "30rem",
        }}
      >
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button
              variant="warning"
              type="submit"
              style={{
                width: "10rem",
                marginLeft: "17rem",
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;

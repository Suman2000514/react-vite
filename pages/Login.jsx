import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { errorToast, successToast } from "../Services/toast.service";
import Navbar from "../Components/Navbar";

function BasicExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function loginHandler(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    axios
      .post("https://backend-mu-pied.vercel.app/users/login", data)
      .then((resp) => {
        if (resp.data.status) {
          sessionStorage.setItem("isLoggedIn", true);
          navigate("/product");

          successToast(resp.data.message);
        }
      })
      .catch((err) => {
        console.log("err", err.response.data.message);
        errorToast(err.response.data.message);
      });
  }

  return (
    <>
      <Navbar />
      <Card bg="info" className="custom-card w-25 m-auto ">
        <Card.Body>
          <div className="text-center mb-4">
            <h2 className="fw-bold custom-text">Login</h2>
          </div>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="custom-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="custom-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid m-2">
              <Button
                variant="primary"
                className="custom-button m-2 "
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
          </Form>

          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-dark fw-bold text-decoration-none"
            >
              Sign Up
            </Link>
          </p>
        </Card.Body>
      </Card>
    </>
  );
}

export default BasicExample;

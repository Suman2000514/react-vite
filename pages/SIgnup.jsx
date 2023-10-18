import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../Services/toast.service";

function SignupComponent() {
  const [fullName, setFullName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = {
      fullName,
      email,
      password,
    };

    try {
      const resp = await axios.post(
        "https://backend-mu-pied.vercel.app/users/register",
        data
      );

      if (resp.data.status) {
        navigate("/");
        successToast(resp.data.message);
      }
    } catch (err) {
      errorToast(err.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <Card
        bg="info"
        className="shadow px-4 w-25 m-auto"
        style={{ width: "50%" }}
      >
        <Card.Body>
          <div className="mb-3 mt-md-4">
            <h2 className="fw-bold mb-2 text-center">Register</h2>
            <div className="mb-3">
              <Form>
                <Form.Group className="mb-3" controlId="fullName">
                  <Form.Label className="text-center">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-center">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <div className="d-grid m-2">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSignUp}
                  >
                    Create Account
                  </Button>
                </div>
              </Form>
              <div className="mt-3">
                <p className="text-center mt-3">
                  Already Have an account?{" "}
                  <Link
                    to="/"
                    className="text-dark fw-bold text-decoration-none"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default SignupComponent; // Export your functional component

import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
} from "react-bootstrap";
import axios from "axios";
const Counter = () => {
  let [count, setCount] = useState(10000000);
  const [student, setStudent] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  });

  async function getAllProducts() {
    const resp = await axios.get("/products");
    setProduct(resp.data.products);
  }

  useEffect(() => {
    console.log("Specific state change ( render/load)");
  }, [count]);

  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const decrement = (e) => {
    e.preventDefault();
    // setCount(count - 1);
    setStudent("Ram");
  };
  const reset = (e) => {
    e.preventDefault();
    // setCount(0);
    setStudent("Shyam");
  };

  return (
    <Card bg="success">
      <CardHeader>
        <h1>Counter</h1>
      </CardHeader>
      <CardBody>
        <h4>{count}</h4>
      </CardBody>
      <CardFooter>
        <Button variant="info" className="me-2" onClick={increment}>
          Incremnet
        </Button>
        <Button variant="danger" className="me-2" onClick={decrement}>
          Decrement
        </Button>
        <Button variant="primary" className="me-2" onClick={reset}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Counter;

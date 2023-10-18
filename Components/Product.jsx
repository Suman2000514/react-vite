import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";

import { returnDiscountAmount, returnTotal } from "../src/utils/helper";

const Product = ({ product, deleteHandler, editHandler, viewHandler }) => {
  return (
    <Card
      style={{
        width: "20%",
        height: "500px",
        color: "whitesmoke",
        backgroundColor: "black",
        margin: "auto",
      }}
    >
      <CardHeader style={{ height: "40%", width: "300px", margin: "auto" }}>
        <Card.Img className="h-100" src={product.thumbnail}></Card.Img>
      </CardHeader>
      <CardBody style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={{ fontWeight: "bolder", textDecoration: "underline" }}>
          {product.title.length > 10
            ? product.title.slice(0, 9) + "..."
            : product.title}
        </h2>
        <p style={{ color: "aqua" }}>
          <b>SubTotal:</b>${product.price}
        </p>
        <p style={{ color: "goldenrod" }}>
          <b>Discount(%):</b>${product.discountPercentage}%
        </p>
        <p style={{ color: "green" }}>
          <b>Discount Amount:</b>${returnDiscountAmount(product)}
        </p>
        <p style={{ color: "red " }}>
          <b>Total:</b>${returnTotal(product)}
        </p>
      </CardBody>
      <CardFooter>
        <Button
          variant="primary"
          className="me-3"
          onClick={(e) => viewHandler(e, product.id)}
        >
          View
        </Button>
        <Button
          variant="secondary"
          className="me-3"
          onClick={(e) => editHandler(e, product.id)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={(e) => deleteHandler(e, product.id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Product;

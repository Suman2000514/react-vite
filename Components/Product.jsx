import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    try {
      const resp = await axios.get("https://dummyjson.com/products");
      setProducts(resp.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  const deleteHandler = (e, id) => {
    e.preventDefault();
    const filteredProds = products.filter((prod) => prod.id !== id);
    setProducts(filteredProds);
  };

  return (
    <>
      <h3 className="text-center text-decoration-underline">Products</h3>
      <div className="container">
        {products.map((product) => (
          <Card
            className="card bg-black text-bg-dark"
            style={{ height: 400, width: 400 }}
            key={product.id}
          >
            <Card.Header className="h-50">
              <Card.Img
                className="h-100 w-100 m-0"
                src={product.thumbnail}
                alt="product"
              />
              <h4 className="text-center text-capitalize mt-1">
                {product.title.length > 15
                  ? product.title.slice(0, 14) + "..."
                  : product.title}
              </h4>
            </Card.Header>

            <Card.Body className="h-25 mt-3">
              <div className="priceContainer">
                <p>Price: ${product.price}</p>
                <p>Discount: ${product.discountPercentage}%</p>
              </div>

              <p>{product.description.slice(0, 45) + "..."}</p>
            </Card.Body>

            <Card.Footer className="button">
              <Button variant="primary">View</Button>
              <Button variant="secondary">Edit</Button>
              <Button
                variant="danger"
                onClick={(e) => deleteHandler(e, product.id)}
              >
                Delete
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Product;

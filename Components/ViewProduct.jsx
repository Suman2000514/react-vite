import React from "react";
import { Button, Form, Modal, FloatingLabel, Image } from "react-bootstrap";

const ViewProduct = ({ showView, handleViewClose, viewProduct }) => {
  return (
    <Modal show={showView} onHide={handleViewClose}>
      <Modal.Header closeButton>View Product </Modal.Header>

      <Modal.Body>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Image"
            className="mb-3"
          >
            <Image
              name="thumbnail"
              height={200}
              width={200}
              src={viewProduct.thumbnail}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTitle"
            label="Title"
            name="Title"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="title"
              placeholder="Product Title"
              value={viewProduct.title}
              readOnly
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingDesc"
            label="Description"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="description"
              placeholder="Description"
              value={viewProduct.description}
              readOnly
            />
          </FloatingLabel>

          <FloatingLabel controlId="price" label="Price" className="mb-3">
            <Form.Control type="text" readOnly value={viewProduct.price} />
          </FloatingLabel>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleViewClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewProduct;

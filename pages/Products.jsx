import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "../Components/Product";
import Loader from "../Components/Loader";
import { errorToast } from "../Services/toast.service";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import AddProduct from "../Components/AddProduct";
import EditProduct from "../Components/EditProductForm";
import ViewProduct from "../Components/ViewProduct";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [originalProduct, setOriginalProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    thumbnail: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});
  const [showView, setShowView] = useState(false);
  const [viewProduct, setViewProduct] = useState({});

  const URL = import.meta.env.VITE_BACKEND_URL;

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(URL + "product");

      setProducts(data.products);
      setOriginalProducts(data.products);

      const categories = data.products.map((product) => {
        return product.category;
      });
      const uniqueCategories = [...new Set(categories)];
      setCategories(uniqueCategories);
      setIsLoading(false);
    } catch (error) {
      errorToast(error.response.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = (e, id) => {
    e.preventDefault();
    const filteredProds = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(filteredProds);
  };

  const showProduct = (e) => {
    e.preventDefault();
    setShow(true);
  };

  function handleClose() {
    setShow(false);
  }

  const handleChange = (e) => {
    setProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value, id: Date.now() };
    });
  };

  const addProductHandler = (e) => {
    e.preventDefault();

    setProducts([product, ...products]);
    setShow(false);
  };

  function handleCloseEdit() {
    setShowEdit(false);
  }

  function handleViewClose() {
    setShowView(false);
  }

  const editHandler = (e, id) => {
    e.preventDefault();

    const prod = products.find((product) => product.id === id);

    setEditedProduct(prod);

    setShowEdit(true);
  };

  const viewHandler = (e, id) => {
    e.preventDefault();
    const prod = products.find((product) => product.id === id);
    setShowView(true);
    setViewProduct(prod);
  };

  function handleEditCHange(e) {
    setEditedProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function editProduct(e) {
    e.preventDefault();

    const updatedProd = products.map((product) => {
      return product.id === editedProduct.id ? editedProduct : product;
    });
    setProducts(updatedProd);
    setShowEdit(false);
  }

  function searchProduct(e) {
    const searchedData = originalProduct.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setProducts(searchedData);
  }

  function filterProducts(data) {
    if (data !== "") {
      const filteredProd = originalProduct.filter((item) => {
        return item.category === data;
      });
      setProducts(filteredProd);
    } else {
      setProducts(originalProduct);
    }
  }
  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="d-flex justify-content-around  m-5">
            <Button variant="info" onClick={showProduct}>
              Add Product
            </Button>
            <Button variant="danger" onClick={handleLogOut}>
              LogOut
            </Button>
            <Form.Select
              style={{ width: "170px" }}
              size="sm"
              onChange={(e) => filterProducts(e.target.value)}
            >
              <option value="">Filter by category</option>
              {categories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
            </Form.Select>
            <FloatingLabel
              controlId="floatingInput"
              label="Search product here"
            >
              <Form.Control
                type="text"
                name="searchKey"
                onChange={searchProduct}
              />
            </FloatingLabel>
          </div>
          <div className="d-flex flex-wrap gap-4">
            {products.map((product) => {
              return (
                <ProductList
                  key={product.id}
                  product={product}
                  deleteHandler={deleteHandler}
                  editHandler={editHandler}
                  viewHandler={viewHandler}
                />
              );
            })}
          </div>
          <AddProduct
            show={show}
            handleClose={handleClose}
            handleChange={handleChange}
            addProductHandler={addProductHandler}
          />
          <EditProduct
            show={showEdit}
            handleClose={handleCloseEdit}
            editedProduct={editedProduct}
            handleEditCHange={handleEditCHange}
            editProduct={editProduct}
          />
          <ViewProduct
            showView={showView}
            handleViewClose={handleViewClose}
            viewProduct={viewProduct}
          />
        </>
      )}
    </>
  );
};

export default Products;

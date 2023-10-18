import "./App.css";
import { Routes, Route } from "react-router-dom";
import Quote from "../Components/Quotes";
import Login from "../pages/Login";
import SignUp from "../pages/SIgnup";
import { ToastContainer } from "react-toastify";
import Product from "../pages/Products";
import AddProductForm from "../Components/AddProduct";
import SecureRoute from "./routes/SecureRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="" element={<SecureRoute />}>
          <Route path="/product" element={<Product />} />
          <Route path="/quotes" element={<Quote />} />
          <Route path="/product/add" element={<AddProductForm />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

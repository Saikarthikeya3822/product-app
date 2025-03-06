import React, { useState,useEffect } from "react";
import ProductForm from '../components/ProductList';
import "bootstrap/dist/css/bootstrap.min.css";
import { getProducts } from "../services/productService";


const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    // debugger
    fetchProducts(); 
  }, []);

  const handleDeleteAll = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete all products?");
    if (!confirmDelete) return;

    try {
      const response = await fetch("http://localhost:8080/deleteallproducts", {
        method: "DELETE",
      });

      if (response.ok) {
        alert("All products deleted successfully.");
        fetchProducts(); 


      } else {
        alert("Failed to delete products.");
      }
    } catch (error) {
      console.error("Error deleting products:", error);
      alert("An error occurred while deleting products.");
    }
  };
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product Management</h2>
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-outline-primary me-2" onClick={() => setShowForm(false)}>
          View Products
        </button>
        <button className="btn btn-outline-success" onClick={() => setShowForm(true)}>
          Add Product
        </button>
        <button className="btn btn-outline-danger" onClick={handleDeleteAll}>
          Delete All Products
        </button>
      </div>
    </div> 
  );
}

export default HomePage
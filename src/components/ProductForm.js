import React, { useState } from "react";
import { addProduct } from "../services/productService";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductForm = ({ onCancel }) => {
  const [newProduct, setNewProduct] = useState({
    prodId: "",
    prodName: "",
    price: "",
    creationDate: new Date().toISOString().slice(0, 16),
    isActive: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    await addProduct(newProduct);
    onCancel();
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "90%" }}>
        <h4 className="text-center mb-4">Add Product</h4>

        <div className="mb-3">
          <label className="form-label">Product ID</label>
          <input
            type="text"
            name="prodId"
            className="form-control form-control-sm"
            value={newProduct.prodId}
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            name="prodName"
            className="form-control form-control-sm"
            placeholder="Enter product name"
            value={newProduct.prodName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            step="0.01"
            name="price"
            className="form-control form-control-sm"
            placeholder="Enter product price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Creation Date</label>
          <input
            type="datetime-local"
            name="creationDate"
            className="form-control form-control-sm"
            value={newProduct.creationDate}
            disabled
          />
        </div>

        

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="isActive"
            className="form-check-input"
            checked={newProduct.isActive}
            onChange={handleInputChange}
            id="isActiveCheckbox"
          />
          <label className="form-check-label" htmlFor="isActiveCheckbox">
            Is Active
          </label>
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-primary btn-sm" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-secondary btn-sm" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
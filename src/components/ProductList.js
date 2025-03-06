import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">Product List</h3>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.prodId} className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{product.prodName}</h5>
                  <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                  <p className="card-text text-muted">
                    Created: {new Date(product.creationDate).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products available</p>
        )}
      </div>
    </div>
  );

  
};

export default ProductList;

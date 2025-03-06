// const API_URL = "http://localhost:8080/products";
const GET_PRODUCTS_URL = "http://localhost:8080/products";
const ADD_PRODUCT_URL = "http://localhost:8080/addproduct";

export const getProducts = async () => {
  try {
    const response = await fetch(GET_PRODUCTS_URL);
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const addProduct = async (product) => {
  try {
    await fetch(ADD_PRODUCT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prodName: product.prodName,
        price: parseFloat(product.price), // Convert string to BigDecimal-compatible format
      }),
    });
    console.log("added sucessfully");
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

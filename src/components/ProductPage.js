import React from "react";
import { useParams } from "react-router-dom";
import { albumProducts, merchandiseProducts } from "../constants";
import ProductDetail from "./ProductsDetail";

const ProductPage = () => {
  const { productId, productType } = useParams();

  let products;
  if (productType === "album") {
    products = albumProducts;
  } else if (productType === "merchandise") {
    products = merchandiseProducts;
  }

  return <ProductDetail products={products} productId={productId} />;
};

export default ProductPage;

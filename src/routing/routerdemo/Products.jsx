import React from "react";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  console.log("COmponentr rendered");
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  return (
    <div>
      <h1>Products</h1>
      <h2>Selected Category: {category || "None"}</h2>
      <button onClick={() => setSearchParams({ category: "Laptop" })}>
        Laptop
      </button>

      <button onClick={() => setSearchParams({ category: "Mobile" })}>
        Mobile
      </button>

      <button onClick={() => setSearchParams({ category: "Headphones" })}>
        Headphones
      </button>
    </div>
  );
};

export default Products;

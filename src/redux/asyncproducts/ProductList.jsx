import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading Products</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }
  return <div>
    <h2>Products</h2>
    {
        products.map((product)=>(
            <div key={product.id}>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} />
                <p>${product.price}</p>
            </div>
        ))
    }
  </div>;
};

export default ProductList;

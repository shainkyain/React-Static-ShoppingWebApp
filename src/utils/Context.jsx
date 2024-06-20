import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const productContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const { data } = await axios("/products");
      console.log(data);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <productContext.Provider value={[products, setProducts]}>
      {props.children}
    </productContext.Provider>
  );
};

export default Context;

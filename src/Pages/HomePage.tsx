import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

import Hero from "../components/Hero";

import axios from "axios";
import ProductList from "../components/ProductList";
import { productItem } from "../types/types";

export default function HomePage() {
  const [storeItems, setStoreItems] = useState<productItem[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setStoreItems(response.data));
  }, []);

  return (
    <>
      <Hero />
      <h1 className="text-3xl uppercase font-semibold text-center mb-10">Our New Catalog</h1>
      <ProductList storeItems={storeItems} />
    </>
  );
}

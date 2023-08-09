import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import { productItem } from "./types/types";
import HomePage from "./HomePage";
export default function App() {
  const [storeItems, setStoreItems] = useState<productItem[]>([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setStoreItems(response.data))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) return "Loading..";
  return (
    <HomePage>
      <ProductList storeItems={storeItems} />
    </HomePage>
  );
}

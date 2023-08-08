import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";

export default function App() {
  const [storeItems, setStoreItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setStoreItems(response.data)).finally(()=> setLoading(false));
  }, []);

  if(isLoading) return "Loading..";
  return <div className="container mx-auto mt-10">
    <h1 className="text-3xl text-center mb-10">Estore</h1>
    <ProductList storeItems={storeItems}/>
  </div>;
}

import { useEffect, useState }from "react";

export default function App() {
  const [storeItems, setStoreItems] = useState([])

  useEffect(()=> {
    fetch("https://fakestoreapi.com/products").then((data) => console.log(data));
  },[])
  return (
    <div>App</div>
  )
}

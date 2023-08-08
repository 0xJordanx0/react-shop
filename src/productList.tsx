import { productItem, productList } from "./types/types";
import ProductItem from "./ProductItem";

export default function ProductList({storeItems}: productList) {
  return (
    <div className="grid grid-rows-2 grid-cols-2 md:grid-rows-2 md:grid-cols-3 lg:grid-rows-3 lg:grid-cols-4 xl:grid-rows-2 xl:grid-cols-5 2xl:grid-rows-1 2xl:grid-cols-6 gap-4">
      {storeItems.map((item:productItem) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  );
}

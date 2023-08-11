import { productItem } from "../types/types";
import { NavLink } from "react-router-dom";
export default function ProductItem(props: productItem) {
  return (
    <NavLink to={`/product/${props.id}`}>
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 hover:opacity-50">
      <img
        src={props.image}
        alt="product"
        className="h-96 w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <h3 className="mt-4 text-sm text-gray-700">{props.title}</h3>
    <p className="mt-1 text-lg font-medium text-gray-900">${props.price}</p>
    </NavLink>
  );
}

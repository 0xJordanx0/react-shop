import { productItem } from "./types/types";

export default function ProductItem(props: productItem) {
  return (
    <div className="flex justify-center">
      <div className="bg-[#00A8E8] text-center text-[##00171F] p-5">
        <img src={props.image} className="p-5 mx-auto min-h-[150px] max-h-[150px] max-w-[100px] " />
        <div className="flex flex-col gap-3 w-52 text-sm"> 
          <p>Title: {props.title}</p>
          <p>Price:{props.price} </p>
          <p>Category: {props.category}</p>
        </div>
      </div>
    </div>
  );
}

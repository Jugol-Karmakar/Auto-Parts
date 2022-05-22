import React from "react";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";

const Part = (props) => {
  const { name, image, description, available, order, price } = props.part;
  return (
    <div className="shadow-lg overflow-hidden rounded-lg">
      <div className="w-full h-72">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-bold text-sky-900">{name}</h2>
        <p className="text-sm font-semibold text-stone-600">{description}</p>
        <p className="text-lg text-black font-bold">Available : {available}</p>
        <p className="text-lg text-black font-bold">Minimum Order : {order}</p>
        <p className="text-lg font-bold text-[#fa630b] flex items-center my-3">
          Price :{" "}
          <span className="flex items-center text-2xl ml-2">
            <HiOutlineCurrencyBangladeshi /> {price}
          </span>{" "}
          <sub> /MRP</sub>
          <span className="text-sky-900 ml-2">(Per Unit)</span>
        </p>
        <div className="flex justify-center my-2">
          <button className="w-full bg-[#ffc801] py-3 font-bold text-black uppercase hover:bg-zinc-800 hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;

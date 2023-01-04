import React from "react";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Part = (props) => {
  const { _id, name, image, description, available, order, price } = props.part;
  const navigate = useNavigate();

  const purchaseParts = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div className="shadow-lg overflow-hidden rounded-lg">
      <div className="w-full h-72 p-5">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-bold text-center text-sky-800">{name}</h2>
        <p className="text-sm font-semibold text-center text-stone-600 my-2">
          {description}
        </p>
        <p className="text-lg font-bold text-[#fa630b] flex justify-center items-center my-3">
          <HiOutlineCurrencyBangladeshi className=" text-2xl ml-2" /> {price}
          <span className="text-sky-900 ml-2">(Per product)</span>
        </p>
        <p className="text-lg font-bold text-center text-gray-700">
          Available : {available}
        </p>
        <p className="text-lg font-bold text-center text-gray-700">
          Minimum Order : {order}
        </p>

        <div className="flex justify-center my-2">
          <button
            onClick={() => purchaseParts(_id)}
            className="w-full bg-blue-600 py-3 font-bold uppercase hover:bg-blue-700 text-white rounded-full"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;

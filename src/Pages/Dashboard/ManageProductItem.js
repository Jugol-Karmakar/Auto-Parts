import React from "react";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import useParts from "../../Hooks/useParts";

const ManageProductItem = ({ part }) => {
  const { _id, name, image, available, price, order, description } = part;

  const [parts, setParts] = useParts();

  const handelDeleteItem = (id) => {
    const sure = window.confirm("Are you sure want to delete?");
    if (sure) {
      const url = `http://localhost:5000//parts/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deleteCount > 0) {
            const item = parts.filter((part) => part._id !== id);
            setParts(item);
          }
        });
    }
  };

  return (
    <>
      <div className="bg-white shadow-xl rounded-md overflow-hidden">
        <div className="w-full h-36">
          <img className="w-full h-full object-contain" src={image} alt="" />
        </div>
        <div className="p-5">
          <h3 className="text-2xl font-bold text-center text-sky-800">
            {name}
          </h3>
          <p className="text-sm text-center text-stone-900 my-2">
            {description}
          </p>
          <p className="text-lg font-bold text-[#fa630b] flex justify-center items-center my-3">
            <HiOutlineCurrencyBangladeshi />
            {price}
            <span className="text-sky-900 ml-2">(Per Unit)</span>
          </p>

          <p className="text-lg font-bold text-center text-gray-700">
            Available : {available}
          </p>
          <p className="text-lg font-bold text-center text-gray-700">
            Order : {order}
          </p>
        </div>
        <button
          onClick={() => handelDeleteItem(parts._id)}
          className="w-full px-8 text-white bg-[#C70909] hover:bg-[#C70909]  py-2 font-bold"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ManageProductItem;

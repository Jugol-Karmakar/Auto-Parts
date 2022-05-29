import React from "react";
import useParts from "../../Hooks/useParts";
import ManageProductItem from "./ManageProductItem";

const ManageProduct = () => {
  const [parts, setParts] = useParts();
  return (
    <div>
      <h1 className="text-4xl font-bold m-6 border-b-2 border-blue-600 pb-4">
        Manage Product
      </h1>
      <div className="grid grid-cols-3 gap-6 mx-4 my-10">
        {parts.map((part) => (
          <ManageProductItem key={part._id} part={part}></ManageProductItem>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;

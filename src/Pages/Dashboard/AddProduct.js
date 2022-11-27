import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handelAddproduct = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const available = e.target.available.value;
    const order = e.target.order.value;
    const description = e.target.description.value;

    const addParts = {
      name,
      image,
      price,
      available,
      order,
      description,
    };

    fetch("http://localhost:5000/parts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addParts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Product Add Successfully");
      });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold m-6 border-b-2 border-blue-600 pb-4">
        Add Product
      </h1>
      <div className="max-w-xl mx-auto bg-white px-10 py-14 rounded-2xl my-6">
        <form
          onSubmit={handelAddproduct}
          className="flex flex-col items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            required
            className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-lg mx-14 rounded-xl mb-4 px-6 py-3"
          />
          <div className="flex">
            <input
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs mr-4 rounded-xl mb-4 px-6 py-3"
              type="text"
              name="image"
              required
              placeholder="Product Image"
            />
            <input
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs ml-4 rounded-xl mb-4 px-6 py-3"
              type="text"
              name="price"
              required
              placeholder="Product Price"
            />
          </div>
          <div className="flex">
            <input
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs mr-4 rounded-xl mb-4 px-6 py-3"
              type="text"
              name="available"
              required
              placeholder="Available Product"
            />
            <input
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs ml-4 rounded-xl mb-4 px-6 py-3"
              type="text"
              name="order"
              required
              placeholder="Minimum Order"
            />
          </div>
          <textarea
            type="text"
            name="description"
            required
            className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-lg mx-14 rounded-xl mb-4 px-6 py-3"
            placeholder="Product Description"
          ></textarea>
          <input
            className="bg-blue-600 rounded-lg font-semibold text-white cursor-pointer py-3 w-full max-w-lg"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

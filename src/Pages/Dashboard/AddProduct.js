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

    fetch("https://limitless-sea-40851.herokuapp.com/parts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      <div className="max-w-md mx-auto bg-white p-10 rounded-2xl my-6">
        <form onSubmit={handelAddproduct} className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="input input-bordered input-primary w-full max-w-sm mb-4"
          />
          <input
            className="input input-bordered input-primary w-full max-w-sm mb-4"
            type="text"
            name="image"
            required
            placeholder="Product Image"
          />
          <input
            className="input input-bordered input-primary w-full max-w-sm mb-4"
            type="text"
            name="price"
            required
            placeholder="Price"
          />
          <input
            className="input input-bordered input-primary w-full max-w-sm mb-4"
            type="text"
            name="available"
            required
            placeholder="Available Product"
          />
          <input
            className="input input-bordered input-primary w-full max-w-sm mb-4"
            type="text"
            name="order"
            required
            placeholder="Order Product"
          />
          <textarea
            type="text"
            name="description"
            required
            className="textarea textarea-primary mb-4"
            placeholder="Product Description"
          ></textarea>
          <input
            className="bg-blue-600 rounded-lg font-semibold text-white cursor-pointer py-3"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

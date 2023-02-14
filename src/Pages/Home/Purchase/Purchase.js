import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Purchase = () => {
  const [purchase, setPurchase] = useState({});
  console.log(purchase);
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    defaultValues: {
      name: "",
      email: "",
      product: "",
      price: "",
    },
  });

  // console.log(purchase.name);

  useEffect(() => {
    const url = `https://auto-parts-server-jdev.onrender.com/parts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const defaults = {
          name: user.displayName,
          email: user.email,
          product: data.name,
          price: purchase.price,
        };
        setPurchase(data);
        reset(defaults);
      });
  }, [id, purchase.price, user.displayName, user.email, reset]);

  const onSubmit = (object) => {
    const booking = object;
    console.log(object);
    fetch("https://auto-parts-server-jdev.onrender.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast(`${object.product} purchase Successfully Done!!`);
      });
  };

  // product booking
  // const handelBookngSubmit = (e) => {
  //   e.preventDefault();
  //   const name = user?.displayName;
  //   const email = user?.email;
  //   const product = purchase.name;
  //   const price = purchase.price;
  //   const address = e.target.address.value;
  //   const phone = e.target.phone.value;
  //   const quantity = e.target.quantity.value;

  //   const booking = {
  //     name,
  //     email,
  //     product,
  //     price,
  //     address,
  //     phone,
  //     quantity,
  //   };

  //   fetch("https://auto-parts-server-jdev.onrender.com/booking", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(booking),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       toast(`${product} purchase Successfully Done!!`);
  //     });
  // };

  return (
    <div className="w-full bg-[#dfe2f7] ">
      <div className="container min-h-screen mx-auto p-10 flex flex-col lg:flex-row justify-around">
        <div className="shadow-lg overflow-hidden rounded-lg max-w-md bg-white">
          <div className="w-full h-72 p-5">
            <img
              className="w-full h-full object-cover"
              src={purchase.image}
              alt=""
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-bold text-center text-sky-800">
              {purchase.name}
            </h2>
            <p className="text-sm font-semibold text-center text-stone-600 my-2">
              {purchase.description}
            </p>
            <p className="text-lg font-bold text-[#fa630b] flex justify-center items-center my-3">
              <HiOutlineCurrencyBangladeshi className=" text-2xl ml-2" />
              {purchase.price}
              <span className="text-sky-900 ml-2">(Per product)</span>
            </p>
            <p className="text-lg font-bold text-center text-gray-700">
              Available : {purchase.available}
            </p>
            <p className="text-lg font-bold text-center text-gray-700">
              Minimum Order : {purchase.order}
            </p>
          </div>
        </div>
        <div className="shadow-lg overflow-hidden rounded-lg max-w-md bg-white mt-6 lg:mt-0">
          <h2 className="text-center text-2xl py-3 font-bold">Purchase Now</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 mx-10">
            <input
              {...register("name")}
              type="text"
              disabled
              className="input input-bordered input-primary w-full mb-6"
            />

            <input
              {...register("email")}
              type="email"
              disabled
              className="input input-bordered input-primary w-full mb-6"
            />
            <input
              {...register("product")}
              type="text"
              disabled
              className="input input-bordered input-primary w-full mb-6"
            />
            <input
              {...register("address", {
                required: "address is required.",
                pattern: {
                  value: /[A-Za-z]/,
                  message: "Number is not a address.",
                },
              })}
              type="text"
              placeholder="Address"
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-lg  rounded-xl mb-4 px-6 py-3"
            />
            <ErrorMessage
              errors={errors}
              name="address"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-red-600">
                    {message}
                  </p>
                ))
              }
            />
            <input
              {...register("number", {
                required: "Number is required.",
                pattern: {
                  value: /[0-9]/,
                  message: "Alphabet is not a number.",
                },
              })}
              type="text"
              placeholder="Phone Number"
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-lg  rounded-xl mb-4 px-6 py-3"
            />
            <ErrorMessage
              errors={errors}
              name="number"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-red-600">
                    {message}
                  </p>
                ))
              }
            />
            <input
              {...register("quantity", {
                required: "Quantity is required.",
                min: {
                  value: purchase.order,
                  message: "Order more than minimum order",
                },
                max: {
                  value: purchase.available,
                  message: "Order less than available product",
                },
              })}
              type="number"
              placeholder="Quantity"
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-lg  rounded-xl mb-4 px-6 py-3"
            />
            <ErrorMessage
              errors={errors}
              name="quantity"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-red-600">
                    {message}
                  </p>
                ))
              }
            />
            <input
              type="submit"
              value="Book Now"
              className="btn bg-blue-600 border-0 hover:bg-blue-700 w-full mb-6"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

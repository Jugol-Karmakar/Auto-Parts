import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);

  const [purchase, setPurchase] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/parts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);

  return (
    <div className="w-full bg-[#f6f7ff] ">
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
              <span className="text-sky-900 ml-2">(Per Unit)</span>
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
          <form className="mt-4 mx-10">
            <input
              type="text"
              name="name"
              value={user?.displayName}
              disabled
              class="input input-bordered input-primary w-full mb-6"
            />

            <input
              type="email"
              name="email"
              value={user?.email}
              disabled
              class="input input-bordered input-primary w-full mb-6"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              class="input input-bordered input-primary w-full mb-6"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered input-primary w-full mb-6"
            />
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              class="input input-bordered input-primary w-full mb-6"
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

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Demo = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [purchase, setPurchase] = useState({});

  useEffect(() => {
    const url = `https://limitless-sea-40851.herokuapp.com/parts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);

  // product booking

  return (
    <div className="w-full bg-[#dfe2f7] ">
      <div className="container min-h-screen mx-auto p-10 flex flex-col lg:flex-row justify-around">
        <div className="shadow-lg overflow-hidden rounded-lg max-w-md bg-white mt-6 lg:mt-0">
          <h2 className="text-center text-2xl py-3 font-bold">Purchase Now</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <fieldset disabled>
                <input
                  {...register("email")}
                  type="email"
                  value={user?.email}
                  className="input input-bordered w-full max-w-xs"
                />
              </fieldset>
            </div>
            <div className="form-control w-full max-w-xs">
              <fieldset disabled>
                <input
                  {...register("name")}
                  type="text"
                  value={user?.displayName}
                  className="input input-bordered w-full max-w-xs"
                />
              </fieldset>
            </div>

            <div className="form-control w-full max-w-xs">
              <fieldset disabled>
                <input
                  {...register("patrs")}
                  type="text"
                  value={purchase.name}
                  className="input input-bordered w-full max-w-xs"
                />
              </fieldset>
            </div>

            <div className="form-control w-full max-w-xs">
              <input
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address s required",
                  },
                  message: "Address is Required",
                })}
                type="text"
                placeholder="Your Adress"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <input
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone Number is Required",
                  },
                })}
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <input
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is Reqired",
                  },
                  min: {
                    value: 400,
                    message: "minmun order more than 400",
                  },
                  max: {
                    value: 1000,
                    message: "maximum value gather than 1000",
                  },
                })}
                type="text"
                placeholder="Quantity"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.quantity.message}
                  </span>
                )}
                {errors.quantity?.type === "min" && (
                  <span className="label-text-alt text-red-600">
                    {errors.quantity.message}
                  </span>
                )}
                {errors.quantity?.type === "max" && (
                  <span className="label-text-alt text-red-600">
                    {errors.quantity.message}
                  </span>
                )}
              </label>
            </div>

            <input type="submit" value="booking" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Demo;

import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4OinJiEZ0zjbT3fMKkg8gWVdVTutIkqW3A60ZBpvoY840mZYuMdqOZNJaqOYOdhxRZ54RpMcUddPbuLTjgAEV200ddYw7LQW"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data: order, isLoading } = useQuery(["booking", id], () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold m-6 border-b-2 border-blue-600 pb-4">
        Please Pay For Your Product!!
      </h1>
      <div className="mx-10">
        <div className="card w-50 max-w-md bg-base-100 shadow-xl my-8">
          <div className="card-body">
            <p className="font-bold text-gray-700 text-xl">
              Hello, {order?.name}
            </p>
            <h2 className="text-2xl mb-2">
              Please Pay for{" "}
              <span className="text-blue-600 font-bold">{order?.product}</span>
            </h2>
            <p className="text-lg font-bold mb-2">
              Your Qunatity : {order?.quantity}
            </p>
            <p className="text-lg font-bold mb-2">
              Total Price :{" "}
              <span className="text-orange-500">
                {" "}
                {parseInt(order?.quantity) * parseInt(order?.price)}
              </span>
            </p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-50 max-w-md shadow-xl bg-base-100 my-8">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

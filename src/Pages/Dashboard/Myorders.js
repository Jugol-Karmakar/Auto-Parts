import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Myorders = () => {
  const [bookings, setBooking] = useState([]);
  const [user, loading] = useAuthState(auth);

  console.log(bookings);

  useEffect(() => {
    if (user) {
      fetch(
        `https://auto-parts-server-jdev.onrender.com/booking?email=${user.email}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setBooking(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-4xl font-bold m-6 border-b-2 border-blue-600 pb-4">
        My Orders : {bookings.length}
      </h2>
      <div className="overflow-x-auto mx-3 my-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Address</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((book, index) => (
              <tr key={book._id}>
                <th>{index + 1}</th>
                <td>{book.name}</td>
                <td>{book.email}</td>
                <td>{book.product}</td>
                <td className="text-purple-500 font-semibold">
                  {book.address}
                </td>
                <td className="text-purple-500 font-semibold">
                  {book.quantity}
                </td>
                <td className="text-purple-500 font-semibold">
                  {book.price && !book.paid && (
                    <Link to={`/dashboard/payment/${book._id}`}>
                      <button className="btn btn-xs bg-green-600 border-0">
                        Payment
                      </button>
                    </Link>
                  )}
                  {book.price && book.paid && (
                    <div>
                      <p className="font-bold text-green-600">Paid</p>
                    </div>
                  )}
                </td>
                <td className="text-purple-500 font-semibold pr-3">
                  {book.price && book.paid && (
                    <p className="text-sm text-green-600">
                      <span className="text-black">transactionId :</span> <br />{" "}
                      {book.transactionId}
                    </p>
                  )}
                  {book.price && !book.paid && (
                    <button className="btn btn-xs bg-red-600 border-0">
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myorders;

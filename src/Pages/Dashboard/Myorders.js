import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Myorders = () => {
  const [bookings, setBooking] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://limitless-sea-40851.herokuapp.com/booking?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setBooking(data);
        });
    }
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold ml-3 text-purple-700 my-2">
        My Orders : {bookings.length}
      </h2>
      <div className="overflow-x-auto mx-3">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Address</th>
              <th>Quantity</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myorders;

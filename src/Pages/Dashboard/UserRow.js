import React from "react";
import { toast } from "react-toastify";
import { FaUserAlt } from "react-icons/fa";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Admin Make Successfully !!");
        }
      });
    // fetch(`http://localhost:5000/user/admin/${email}`, {
    //   method: "PUT",
    // })
    //   .then((res) => {
    //     if (res.status === 403) {
    //       toast.error("Failed to Make Admin");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (data.modifiedCount > 0) {
    //       refetch();
    //       toast.success("Admin Make Successfully !!");
    //     }
    //   });
  };

  const handleDeleteUser = () => {
    const sure = window.confirm("Are you sure want to delete user?");
    if (sure) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success("user delete Successfully !!");
          }
        });
    }
  };

  return (
    <tr>
      <th>
        <FaUserAlt className="text-lg text-green-500" />
      </th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button
            onClick={makeAdmin}
            className="btn btn-xs bg-green-600 border-0"
          >
            Make Admin
          </button>
        ) : (
          <p className="font-bold text-green-600">Alread admin</p>
        )}
      </td>
      <td>
        <button
          onClick={handleDeleteUser}
          className="btn btn-xs bg-red-700 border-0"
        >
          Delete User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ProfileModal = () => {
  const [user] = useAuthState(auth);

  const handelUpdateProfile = (e) => {
    e.preventDefault();

    const profile = {
      email: user.email,
      name: user.displayName,
      education: e.target.education.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };

    fetch("https://limitless-sea-40851.herokuapp.com/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Update Your Profile");
      });
  };

  return (
    <div className="">
      <label
        htmlFor="profile-modal"
        className="btn bg-blue-600 border-0 hover:bg-blue-700"
      >
        Update Profile
      </label>
      <input type="checkbox" id="profile-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="profile-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold text-center text-blue-600">
            Update Your Profile
          </h3>
          <form
            onSubmit={handelUpdateProfile}
            className="grid grid-cols-1 gap-4 justify-items-center mt-4"
          >
            <input
              type="text"
              name="name"
              value={user.displayName}
              disabled
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              disabled
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />
            <input
              type="text"
              name="education"
              placeholder="Education"
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />
            <input
              type="submit"
              value="Update"
              className="btn bg-blue-600 border-0 hover:bg-blue-700 w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

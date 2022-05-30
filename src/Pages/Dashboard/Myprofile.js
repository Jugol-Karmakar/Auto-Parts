import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Myprofile = () => {
  const [user] = useAuthState(auth);
  const [openForm, setOpenForm] = useState(false);
  const [update, setUpdate] = useState([]);

  const handelProfileUpdate = (e) => {
    e.preventDefault();

    const education = e.target.education.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const link = e.target.link.value;

    const profile = {
      education,
      address,
      phone,
      link,
    };

    const url = `https://limitless-sea-40851.herokuapp.com/user/${user.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Profile Update Successfully !!");
      });
  };

  useEffect(() => {
    fetch(
      `https://limitless-sea-40851.herokuapp.com/user/filter?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, [user]);

  return (
    <div>
      <h2 className="text-4xl font-bold m-6 border-b-2 border-blue-600 pb-4">
        My Profile
      </h2>
      <div className="m-10">
        <div className="max-w-xl bg-slate-100 shadow-sm rounded-md">
          <div className="flex justify-around p-8">
            <div>
              <div className="w-36 h-36 mb-12">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://cdn.dribbble.com/users/35310/screenshots/3062471/man-with-beard-and-glasses.png?compress=1&resize=400x300&vertical=top"
                  }
                  alt=""
                />
              </div>
              <button
                className="bg-blue-600 px-6 py-2 font-bold text-lg text-white"
                onClick={() => setOpenForm(!openForm)}
              >
                Update profile
              </button>
            </div>

            {openForm ? (
              <div className="mx-10">
                <form onSubmit={handelProfileUpdate}>
                  <input
                    type="text"
                    name="education"
                    placeholder="Education"
                    className="input input-bordered input-primary w-full max-w-xs mb-3"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="input input-bordered input-primary w-full max-w-xs mb-3"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="input input-bordered input-primary w-full max-w-xs mb-3"
                  />
                  <input
                    type="text"
                    name="link"
                    placeholder="LinkedIn Profile Link"
                    className="input input-bordered input-primary w-full max-w-xs mb-3"
                  />
                  <input
                    className="bg-blue-600 rounded-lg font-semibold text-white cursor-pointer py-3 w-full"
                    type="submit"
                    value="Update Profile"
                  />
                </form>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <p className=" font-medium text-gray-600">Full Name</p>
                  <h2 className="text-left text-lg font-medium">
                    {user.displayName}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">Email</p>
                  <h2 className="text-left text-lg font-medium">
                    {user.email}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">Education</p>
                  <h2 className="text-left text-lg font-medium">
                    {update.education}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-medium text-gray-600">Address</p>
                  <h2 className="text-left text-xl font-medium">
                    {update.address}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">Phone</p>
                  <h2 className="text-left text-lg font-medium">
                    {update.phone}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">
                    LinkedIn Profile Link
                  </p>
                  <h2 className="text-left text-lg font-medium">
                    {update.link}
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;

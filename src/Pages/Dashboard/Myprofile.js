import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Myprofile = () => {
  const [user] = useAuthState(auth);
  const [updateProfile, setUpdateProfile] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetch(`https://auto-parts-server-zeta.vercel.app/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, [user.email]);

  const handelUpdateProfile = (e) => {
    e.preventDefault();

    const name = user?.displayName;
    const email = currentUser?.email;

    const education = e.target.education.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const link = e.target.link.value;

    const updateInfo = {
      name,
      email,
      education,
      address,
      phone,
      link,
    };

    fetch(`https://auto-parts-server-zeta.vercel.app/users/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setUpdateProfile(false);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold m-6 border-b-2 border-blue-600 pb-4">
        My Profile
      </h2>
      <div className="m-10">
        <div className="max-w-2xl bg-slate-100 shadow-sm rounded-md">
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
                className="bg-blue-600 px-6 py-2 font-bold text-lg text-white rounded-full"
                onClick={() => setUpdateProfile(!updateProfile)}
              >
                Update profile
              </button>
            </div>

            {!updateProfile && (
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
                    {currentUser?.email}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">Education</p>
                  <h2 className="text-left text-lg font-medium">
                    {currentUser?.user?.education}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-medium text-gray-600">Address</p>
                  <h2 className="text-left text-xl font-medium">
                    {currentUser?.user?.address}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">Phone</p>
                  <h2 className="text-left text-lg font-medium">
                    {currentUser?.user?.phone}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">
                    LinkedIn Profile Link
                  </p>
                  <h2 className="text-left text-lg font-medium">
                    {currentUser?.user?.link}
                  </h2>
                </div>
              </div>
            )}

            {updateProfile && (
              <div>
                <form
                  onSubmit={(e) => handelUpdateProfile(e)}
                  className="flex flex-col justify-end"
                >
                  <input
                    type="text"
                    name="education"
                    placeholder="Education"
                    className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs mx-14 rounded-xl mb-4 px-6 py-3"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs mx-14 rounded-xl mb-4 px-6 py-3"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs mx-14 rounded-xl mb-4 px-6 py-3"
                  />
                  <input
                    type="text"
                    name="link"
                    placeholder="LinkedIn Profile Link"
                    className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs mx-14 rounded-xl mb-4 px-6 py-3"
                  />
                  <input
                    className="w-full max-w-xs mx-14 rounded-xl mb-4 text-lg  font-bold py-3 cursor-pointer bg-blue-600 border-0 px-10 text-white"
                    type="submit"
                    value="Update Profile"
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;

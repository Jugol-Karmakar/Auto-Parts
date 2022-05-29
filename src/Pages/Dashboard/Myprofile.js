import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ProfileModal from "./ProfileModal";

const Myprofile = () => {
  const [user] = useAuthState(auth);

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
                  src={user?.photoURL}
                />
              </div>
              <div>
                <ProfileModal />
              </div>
            </div>

            <div>
              <div className="mb-4">
                <p className=" font-medium text-gray-600">Full Name</p>
                <h2 className="text-left text-lg font-medium">
                  {user.displayName}
                </h2>
              </div>
              <div className="mb-4">
                <p className="font-medium text-gray-600">Email</p>
                <h2 className="text-left text-lg font-medium">{user.email}</h2>
              </div>
              <div className="mb-4">
                <p className="font-medium text-gray-600">Education</p>
                <h2 className="text-left text-lg font-medium">{}</h2>
              </div>
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-600">Address</p>
                <h2 className="text-left text-xl font-medium">{}</h2>
              </div>
              <div className="mb-4">
                <p className="font-medium text-gray-600">Phone</p>
                <h2 className="text-left text-lg font-medium">{}</h2>
              </div>
              <div className="mb-4">
                <p className="font-medium text-gray-600">
                  LinkedIn Profile Link
                </p>
                <h2 className="text-left text-lg font-medium">{}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;

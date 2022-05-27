import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ProfileModal from "./ProfileModal";

const Myprofile = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div>
      <h2 className="text-4xl font-bold m-6 border-b-2 border-blue-600 pb-4">
        My Profile
      </h2>
      <div className="ml-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div>
              <p className="text-left">Name</p>
              <h2 className="">{user.displayName}</h2>
            </div>
            <div>
              <p>Email</p>
              <h2>{user.email}</h2>
            </div>
            <div>
              <p>Euucation</p>
              <h2>{}</h2>
            </div>
            <div>
              <p>Address</p>
              <h2>{}</h2>
            </div>
            <div>
              <p>Phone</p>
              <h2>{}</h2>
            </div>
            <div className="card-actions">
              <ProfileModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;

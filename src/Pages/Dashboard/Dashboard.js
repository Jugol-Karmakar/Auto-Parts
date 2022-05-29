import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="container mx-auto my-6">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#dad5f5] mx-6 rounded-2xl">
          <h2 className="text-4xl font-bold text-gray-700 m-3 text-center">
            Dashboard
          </h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-[#e9ecfc]  text-base-content rounded-2xl">
            {/* <!-- Sidebar content here --> */}

            {!admin && (
              <li>
                <Link
                  to="/dashboard"
                  className="text-lg font-bold border border-blue-500 mb-2"
                >
                  My Orders
                </Link>
              </li>
            )}

            {!admin && (
              <li>
                <Link
                  to="/dashboard/addreview"
                  className="text-lg font-bold border border-blue-500 mb-2"
                >
                  Add Reviews
                </Link>
              </li>
            )}

            {admin && (
              <li>
                <Link
                  to="/dashboard/addproduct"
                  className="text-lg font-bold border border-blue-500 mb-2"
                >
                  Add a Product
                </Link>
              </li>
            )}
            {admin && (
              <li>
                <Link
                  to="/dashboard/manageorders"
                  className="text-lg font-bold border border-blue-500 mb-2"
                >
                  Manage All Orders
                </Link>
              </li>
            )}
            {admin && (
              <li>
                <Link
                  to="/dashboard/manageproduct"
                  className="text-lg font-bold border border-blue-500 mb-2"
                >
                  Manage Product
                </Link>
              </li>
            )}

            <li>
              <Link
                to="/dashboard/myprofile"
                className="text-lg font-bold border border-blue-500 mb-2"
              >
                My Profile
              </Link>
            </li>

            {admin && (
              <li>
                <Link
                  to="/dashboard/users"
                  className="text-lg font-bold border border-blue-500 mb-2"
                >
                  Users
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

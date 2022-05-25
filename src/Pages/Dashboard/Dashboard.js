import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto my-6">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#edeafc] mx-6 rounded-2xl">
          <h2 className="text-4xl font-bold text-gray-700 m-3">Dashboard</h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-[#e9ecfc]  text-base-content rounded-2xl">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard" className="text-lg font-bold">
                My Orders
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addreview" className="text-lg font-bold">
                Add Reviews
              </Link>
            </li>
            <li>
              <Link to="/dashboard/myrofile" className="text-lg font-bold">
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Link } from "react-router-dom";
import useParts from "../../../Hooks/useParts";
import Part from "../Part/Part";

const Parts = ({ isHome }) => {
  const [parts, setParts] = useParts();

  return (
    <div className="my-20">
      <h1 className="text-center text-4xl font-bold text-blue-700 ">
        Parts We Privide
      </h1>
      <div className="container mx-auto px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {isHome
          ? parts
              .slice(0, 6)
              .map((part) => <Part key={part._id} part={part}></Part>)
          : parts.map((part) => <Part key={part._id} part={part}></Part>)}
      </div>
      {isHome ? (
        <div className="flex justify-center">
          <Link
            to="/parts"
            className="px-8 py-3 text-lg font-bold rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl"
          >
            {" "}
            See All Parts
          </Link>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Parts;

import React from "react";
import useParts from "../../../Hooks/useParts";
import Part from "../Part/Part";
import Purchase from "../Purchase/Purchase";

const Parts = () => {
  const [parts, setParts] = useParts();

  return (
    <div className="my-20">
      <h1 className="text-center text-4xl font-bold text-blue-700 ">
        Parts We Privide
      </h1>
      <div className="container mx-auto px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {parts.map((part) => (
          <Part key={part._id} part={part}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;

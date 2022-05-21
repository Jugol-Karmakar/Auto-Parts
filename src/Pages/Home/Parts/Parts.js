import React, { useEffect, useState } from "react";
import Part from "../Part/Part";

const Parts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("parts.json")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return (
    <div>
      <div className="container mx-auto px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {parts.map((part) => (
          <Part key={part.id} part={part}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;

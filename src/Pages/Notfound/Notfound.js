import React from "react";
import notimage from "../../images/notfound.jpg";

const Notfound = () => {
  return (
    <div className="w-96 mx-auto my-10 rounded overflow-hidden">
      <img className="w-full" src={notimage} alt="" />
    </div>
  );
};

export default Notfound;

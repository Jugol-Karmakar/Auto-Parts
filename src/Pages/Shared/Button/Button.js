import React from "react";

const Button = ({ children }) => {
  return (
    <button class="btn bg-[#e43315] px-8 rounded-full border-0 font-bold hover:bg-white hover:text-[#e43315]">
      {children}
    </button>
  );
};

export default Button;

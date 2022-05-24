import React from "react";

const Rating = () => {
  return (
    <div className="rating rating-md">
      <input
        readOnly
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        readOnly
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        readOnly
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        readOnly
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <input
        readOnly
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
  );
};

export default Rating;

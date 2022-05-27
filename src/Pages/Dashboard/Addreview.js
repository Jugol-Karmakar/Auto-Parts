import React from "react";
import { toast } from "react-toastify";

const Addreview = () => {
  const handelAddReview = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const rating = e.target.rating.value;
    const review = e.target.review.value;

    const reviews = {
      name,
      email,
      image,
      rating,
      review,
    };

    fetch("https://limitless-sea-40851.herokuapp.com/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Reviews Add Successfully");
      });
  };

  return (
    <div>
      <h2 className="ml-6 text-3xl font-bold my-2 text-blue-500">
        Add a Review
      </h2>
      <div className="max-w-sm mx-auto bg-white p-10 rounded-2xl my-5">
        <form onSubmit={handelAddReview} className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="input input-bordered input-primary w-full max-w-sm mb-4"
          />
          <input
            className="input input-bordered input-primary w-full max-w-sm mb-4"
            type="email"
            name="email"
            required
            placeholder="Email Address"
          />
          <input
            className="input input-bordered input-primary w-full max-w-sm mb-4"
            type="text"
            name="image"
            required
            placeholder="image"
          />
          <input
            className="input input-bordered input-primary w-full max-w-sm mb-4"
            type="text"
            name="rating"
            required
            placeholder="Rating"
          />
          <textarea
            type="text"
            name="review"
            required
            className="textarea textarea-primary mb-4"
            placeholder="Review"
          ></textarea>
          <input
            className="bg-blue-600 rounded-lg font-semibold text-white cursor-pointer py-3"
            type="submit"
            value="Add Review"
          />
        </form>
      </div>
    </div>
  );
};

export default Addreview;

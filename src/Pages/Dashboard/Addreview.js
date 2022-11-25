import React from "react";
import { toast } from "react-toastify";
import review from "../../images/write.webp";

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

    fetch("http://localhost:5000/review", {
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
      <h2 className="text-4xl font-bold m-6 border-b-2 border-blue-600 pb-4">
        Add a Review
      </h2>
      <div className="max-w-xl mx-auto bg-white px-10 py-14 rounded-2xl my-6">
        <form onSubmit={handelAddReview} className="flex flex-col items-center">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-lg mx-14 rounded-xl mb-4 px-6 py-3"
          />
          <div className="flex">
            <input
              type="text"
              name="name"
              placeholder="Your Profession"
              required
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs mr-4 rounded-xl mb-4 px-6 py-3"
            />
            <input
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs ml-4 rounded-xl mb-4 px-6 py-3"
              type="email"
              name="email"
              required
              placeholder="Email Address"
            />
          </div>
          <input
            className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-lg mx-14 rounded-xl mb-4 px-6 py-3"
            type="text"
            name="image"
            required
            placeholder="Your Image Url"
          />
          <textarea
            type="text"
            name="review"
            required
            className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-lg mx-14 rounded-xl mb-4 px-6 py-3"
            placeholder="Write Review"
          ></textarea>
          <input
            className="bg-blue-600 rounded-lg font-semibold text-white cursor-pointer py-3 w-full max-w-lg"
            type="submit"
            value="Add Review"
          />
        </form>
      </div>
    </div>
  );
};

export default Addreview;

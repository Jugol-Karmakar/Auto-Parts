import React from "react";

const NewsLetter = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto px-24 bg-gray-700 rounded-3xl shadow-xl">
        <h2 className="text-blue-500 text-3xl font-bold text-center pt-6">
          Newsletter
        </h2>
        <p className="text-lg text-white text-center py-3">
          Stay up to date with our latest news and product
        </p>
        <div className="flex justify-center pt-6 pb-10">
          <input
            type="email"
            placeholder="Your Email"
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <button className="text-lg font-bold px-8 py-2 bg-blue-600 ml-2 rounded-lg text-white">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

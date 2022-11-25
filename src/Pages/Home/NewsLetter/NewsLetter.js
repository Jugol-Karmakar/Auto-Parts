import React from "react";

const NewsLetter = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto px-24 bg-gray-500 rounded-3xl shadow-xl">
        <h2 className="text-white text-3xl font-bold text-center pt-6">
          Newsletter
        </h2>
        <p className="text-lg text-white text-center py-3">
          Stay up to date with our latest news and product
        </p>
        <div className="flex justify-center items-center pt-6 pb-10">
          <input
            type="email"
            placeholder="Your Email"
            className="border border-ble-600 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-sm rounded-xl px-6 py-3"
          />
          <button className="text-lg font-bold px-8 py-3 bg-blue-700 ml-2 rounded-lg text-white">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

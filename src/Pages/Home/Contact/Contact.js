import React from "react";
import contact from "../../../images/contact.jpg";

const Contact = () => {
  return (
    <div>
      <div className="bg-white py-10">
        <h2 className="text-4xl font-black text-gray-700 text-center my-5 py-5 drop-shadow-md">
          Get In Touch
        </h2>
        <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-1 md:w-full px-10">
          <div className="mx-6 overflow-hidden">
            <img
              className="w-full h-96 object-cover rounded-lg"
              src={contact}
              alt=""
            />
          </div>
          <div className="mx-6 lg:mt-0 mt-6">
            <form>
              <div className="mb-3">
                <input
                  className="py-2 px-2 outline-none rounded-md border-grey-400 border  w-full"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="my-3">
                <input
                  className="py-2 px-2 outline-none rounded-md border-grey-400 border  w-full"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="my-3">
                <input
                  className="py-2 px-2 outline-none rounded-md border-grey-400 
            border 
             w-full"
                  type="text"
                  name="address"
                  id=""
                  placeholder="Address"
                  required
                />
              </div>
              <div className="my-3">
                <input
                  className="py-2 px-2 outline-none rounded-md border-grey-400 
            border 
             w-full"
                  type="text"
                  name="phone"
                  id=""
                  placeholder="Phone number"
                  required
                />
              </div>
              <div className="my-3">
                <textarea
                  className="py-2 px-2 outline-none rounded-md border-grey-400 border w-full"
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className=" flex justify-center mt-4 mb-5">
          <button className="px-10 py-2 bg-blue-600 hover:bg-blue-700 shadow-lg text-lg rounded-full  font-bold  text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

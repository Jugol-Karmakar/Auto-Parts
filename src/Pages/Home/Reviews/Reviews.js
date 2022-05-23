import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Rating from "../../Shared/Rating/Rating";

const Reviews = () => {
  const users = [
    {
      id: 1,
      name: "david miller",
      image:
        "https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "david@gmail.com",
    },
    {
      id: 2,
      name: "david miller",
      image:
        "https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "david@gmail.com",
    },
    {
      id: 3,
      name: "david miller",
      image:
        "https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "david@gmail.com",
    },
    {
      id: 4,
      name: "david miller",
      image:
        "https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "david@gmail.com",
    },
    {
      id: 5,
      name: "david miller",
      image:
        "https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "david@gmail.com",
    },
    {
      id: 6,
      name: "david miller",
      image:
        "https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "david@gmail.com",
    },
    {
      id: 7,
      name: "david miller",
      image:
        "https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "david@gmail.com",
    },
    {
      id: 8,
      name: "david miller",
      image:
        "https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "david@gmail.com",
    },
    {
      id: 9,
      name: "david miller",
      image:
        "https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "david@gmail.com",
    },
  ];

  return (
    <section className="container mx-auto px-10 my-10">
      <h2 className="text-center text-5xl text-cyan-400 font-bold my-3">
        Testimonial And Review
      </h2>
      <p className="text-center w-1/2 mx-auto text-neutral-600">
        See what our patients are saying to us. You can also be a part of our
        amazing patients community.
      </p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
      >
        {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        {users.map((user) => (
          <SwiperSlide key={user.id} className="swiper-wrapper">
            <div
              className="swiper-slide swiper-slide-active px-20 mb-20 flex items-center text-center"
              style={{ width: "500px" }}
            >
              <div class="card w-96 bg-base-100 shadow-xl">
                <div class="avatar flex justify-center my-4">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://api.lorem.space/image/face?hash=3174" />
                  </div>
                </div>
                <div class="card-body items-center text-center">
                  <p className="text-sm">{user.review}</p>
                  <Rating />
                  <h2 class="card-title">{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;

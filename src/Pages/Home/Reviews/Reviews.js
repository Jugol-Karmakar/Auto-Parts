import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Review.css";

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
    <div className="container mx-auto px-20">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <div class="card w-96 bg-base-100 shadow-xl my-6">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Shoes!
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div>
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;

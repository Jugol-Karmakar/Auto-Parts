import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Review.css";
import Rating from "../../Shared/Rating/Rating";

const Reviews = () => {
  const users = [
    {
      id: 1,
      name: "Rahul Choudhury",
      image:
        "https://images.unsplash.com/photo-1505632958218-4f23394784a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "rahul@gmail.com",
    },
    {
      id: 2,
      name: "Sabbir Ahmed",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "sabbir@gmail.com",
    },
    {
      id: 3,
      name: "Sakib Khan",
      image:
        "https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "Sakib@gmail.com",
    },
    {
      id: 4,
      name: "Elizabeth Olsen",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "Olsen@gmail.com",
    },
    {
      id: 5,
      name: "David Miller",
      image:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "david@gmail.com",
    },
    {
      id: 6,
      name: "Shane Watson",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "watson@gmail.com",
    },
    {
      id: 7,
      name: "Mitchel Jhon",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "john@gmail.com",
    },
    {
      id: 8,
      name: "Karim Khan",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "karim@gmail.com",
    },
    {
      id: 9,
      name: "Ellasy Perry",
      image:
        "https://images.unsplash.com/photo-1610631066894-62452ccb927c?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386",
      review:
        "I've been working with car for over a year now and they are the best company. All their products are good, and they are always willing to help. The thing I would say they need to work on is their customer service because sometimes it can be a little slow.",
      email: "Ellasy@gmail.com",
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
        className="mySwiper grid grid-col-1 lg:grid-cols-3"
      >
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="card w-96 bg-base-100 shadow-xl my-6">
              <div className="flex justify-center mt-3">
                <div className="w-28 h-28 overflow-hidden ">
                  <img
                    className="w-full h-full object-cover rounded-full border-2 border-blue-600"
                    src={user.image}
                  />
                </div>
              </div>

              <div className="card-body">
                <p className="text-sm text-gray-700 font-medium">
                  {user.review}
                </p>
                <div>
                  <Rating />
                </div>
                <h2 className="text-center text-lg font-bold">{user.name}</h2>
                <p className="tex-sm font-bold text-gray-600">{user.email}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;

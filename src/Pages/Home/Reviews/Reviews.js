import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Review.css";
import Rating from "../../Shared/Rating/Rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://limitless-sea-40851.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

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
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="card w-96 bg-base-100 shadow-xl my-6">
              <div className="flex justify-center mt-3">
                <div className="w-28 h-28 overflow-hidden ">
                  <img
                    className="w-full h-full object-cover rounded-full border-2 border-blue-600"
                    src={review.image}
                  />
                </div>
              </div>

              <div className="card-body">
                <p className="text-sm text-gray-700 font-medium">
                  {review.review}
                </p>
                <div>
                  <Rating />
                </div>
                <h2 className="text-center text-lg font-bold">{review.name}</h2>
                <p className="tex-sm font-bold text-gray-600">{review.email}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;

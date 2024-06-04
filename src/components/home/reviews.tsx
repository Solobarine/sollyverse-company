import reviews from "@/data/reviews";
import React from "react";
import Review from "./review";

const Reviews = () => {
  return (
    <div className="py-20">
      <div>
        <h3 className="text-3xl sm:text-4xl font-bold text-center">
          Feedback from Our Clients
        </h3>
      </div>
      <div className="mt-6 services-items justify-center">
        {reviews.map((review, index) => (
          <Review review={review} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

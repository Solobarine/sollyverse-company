import Image from "next/image";
import React from "react";

const Review = ({
  review,
}: {
  review: { fullName: string; occupation: string; review: string };
}) => {
  return (
    <div className="p-3 rounded-lg bg-white dark:bg-slate-600 shadow-lg">
      <div className="flex items-center gap-1">
        <img
          src="#"
          alt=""
          width={undefined}
          className="w-12 rounded-full aspect-square object-contain bg-gray-300 shadow-md"
        />
        <div>
          <p>{review.fullName}</p>
          <p>{review.occupation}</p>
        </div>
      </div>
      <p className="mt-6 text-sm">{review.review}</p>
    </div>
  );
};

export default Review;

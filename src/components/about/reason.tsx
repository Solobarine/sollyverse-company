"use client";
import { ReasonsInterface } from "@/types";
import React from "react";
import { register } from "swiper/element";
register();

const Reason = ({
  reason,
}: {
  reason: Pick<ReasonsInterface["reasons"][0], "title" | "reason">;
}) => {
  return (
    <div className="bg-white dark:bg-slate-600 p-4 rounded-lg shadow-lg shadow-slate-300 dark:shadow-slate-900">
      <div className="relative grid place-content-center mb-4">
        <img src="/blob.png" alt="" width={undefined} className="w-32" />
      </div>
      <h3 className="font-semibold text-lg">{reason.title}</h3>
      <p className="text-sm">{reason.reason}</p>
    </div>
  );
};

export default Reason;

"use client";
import Link from "next/link";
import {
  faFacebook,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const TeamMember = ({
  member,
}: {
  member: {
    name: { first: string; last: string };
    picture: { thumbnail: string; medium: string; large: string };
  };
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-52 border-b-2 border-green-400 rounded-lg overflow-hidden shadow-md transition-all duration-700 ${
        isHovered ? "-pt-2" : "pt-auto"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={member.picture.large}
          alt=""
          width={undefined}
          className="object-contain w-full aspect-square"
        />
        <div
          className={`absolute inset-0 backdrop-blur-md bg-green-400/50 transition-all duration-700 ${
            isHovered ? "left-0" : "left-52"
          }`}
        ></div>
        <div
          className={`flex flex-col gap-2 bg-white dark:text-green-400 p-2 px-4 absolute transition-all duration-700 top-1/2 transform -translate-y-1/2 ${
            isHovered ? "right-0" : "-right-16"
          }`}
        >
          <Link href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </div>
      </div>
      <div className="p-2 border-t border-green-400 grid place-content-center gap-2">
        <p className="text-center">{`${member.name.first} ${member.name.last}`}</p>
      </div>
    </div>
  );
};

export default TeamMember;

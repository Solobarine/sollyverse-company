"use client";
import Link from "next/link";
import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ContactForm from "@/components/contactForm";
import {
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactUs = () => {
  return (
    <div className="py-20">
      <h3 className="text-3xl text-center font-semibold">Get In Touch</h3>
      <p className="mb-6 text-center mt-3 max-w-5xl mx-auto">
        Ready to take your project to the next level? We are here to help.
        Whether you have questions, need a consultation, or want to discuss your
        vision, our team is eager to connect with you. Reach out today and let
        us start building something extraordinary together.
      </p>
      <div className="flex flex-wrap p-2 rounded-lg justify-center">
        <div className="px-4 py-8 rounded-lg basis-80 flex flex-col justify-between grow sm:grow-0 bg-green-300 dark:bg-green-800">
          <div>
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p>Say something to start a Chat</p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMobileScreen} />
              <p>(+234) 903 000 3100</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>solobarine@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Remote</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <Link href="/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link href="/">
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
            <Link href="/">
              <FontAwesomeIcon icon={faGithubAlt} />
            </Link>
            <Link href="/">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </div>
        </div>
        <div className="grow sm:grow-0 max-w-lg py-10 px-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

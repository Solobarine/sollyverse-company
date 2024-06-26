import React from "react";
import services from "@/data/services";
import Service from "./service";
const Services = () => {
  return (
    <div className="py-20">
      <h3 className="text-3xl sm:text-4xl font-bold text-center">
        Our Services
      </h3>
      <p className="text-center">
        Discover our comprehensive suite of services designed to meet all your
        software development needs
      </p>
      <div className="services-items justify-center mt-6">
        {services.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;

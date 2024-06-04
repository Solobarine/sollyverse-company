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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti sed
        possimus culpa?
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

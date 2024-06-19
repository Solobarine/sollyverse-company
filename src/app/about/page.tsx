import React from "react";
import aboutContent from "@/data/aboutContent";
import Reason from "@/components/about/reason";

const About = () => {
  return (
    <div className="px-2">
      <div className="grid place-content-center gap-6 py-20">
        <img
          src="/logo.png"
          alt="Sollyverse"
          width={undefined}
          className="w-36 block mx-auto"
        />
        <h4 className="font-semibold text-2xl text-center">
          {aboutContent.title}
        </h4>
        <p className="text-center max-w-3xl">{aboutContent.description}</p>
      </div>
      <div className="px-5 sm:px-10 py-16 grid grid-cols-1 md:grid-cols-2">
        <img src="/mission.png" alt="" className="block mx-auto" />
        <div className="mb-8">
          <h2 className="font-semibold text-green-600 uppercase">
            Our Mission
          </h2>
          <h4 className="text-3xl font-semibold">
            Innovative Solutions, Driving Success
          </h4>
          <p className="leading-relaxed py-2">
            At Sollyverse, our mission is to deliver exceptional web solutions
            that drive business success and enhance user experiences. We are
            committed to innovation, quality, and customer satisfaction.
          </p>
        </div>
      </div>
      <div className="px-5 sm:px-10 py-16 grid grid-cols-1 md:grid-cols-2">
        <img src="/people1.png" alt="" className="place-self-center" />
        <div>
          <h3 className="font-semibold text-green-600">
            3 YEARS OF EXPERIENCE
          </h3>
          <h4 className="text-3xl font-semibold">
            Excellence in Software Development: Our Proven Track Record.
          </h4>
          <p className="text-xl my-3">
            Discover why clients trust us for their software needs. From concept
            to execution, our expertise ensures innovative solutions that drive
            business growth and exceed expectations.
          </p>
          <div className="border-l-2 border-green-400 grid gap-3 p-1 pl-10 mt-3">
            <p>
              Our portfolio includes a diverse range of projects, from scalable
              web applications to complex enterprise systems. Each solution is
              crafted with precision and creativity, leveraging the latest
              technologies to solve unique challenges and propel our clients
              forward.
            </p>
            <p>
              We prioritize client collaboration and transparency, ensuring
              projects are delivered on time and within budget. Whether you are
              a startup looking to innovate or an established enterprise seeking
              optimization, our team is committed to delivering software
              solutions that make a tangible impact on your business.
            </p>
          </div>
        </div>
      </div>
      <div className="about-items py-20">
        {aboutContent.reasons.map((reason, index) => (
          <Reason reason={reason} key={index} />
        ))}
      </div>
      <div className="px-5 sm:px-10 py-16 grid grid-cols-1 md:grid-cols-2">
        <img src="/team.png" alt="" className="block mx-auto" />
        <div>
          <h3 className="font-semibold text-green-600">OUR TEAM</h3>
          <h4 className="text-3xl font-semibold">
            Our Awesome Creative Team Members
          </h4>
          <p className="leading-relaxed py-2">
            Our team is a diverse group of talented professionals with expertise
            in web development, design, and digital strategy. We are passionate
            about what we do and dedicated to delivering outstanding results for
            our clients.
          </p>
        </div>
      </div>
      <div className="px-5 sm:px-10 py-16 grid grid-cols-1 md:grid-cols-2">
        <img src="/code.png" alt="" className="block mx-auto" />
        <div>
          <h3 className="font-semibold text-green-600">Why Choose Us?</h3>
          <h4 className="text-3xl font-semibold">
            Expert Solutions Tailored for Success.
          </h4>
          <p className="leading-relaxed py-2">
            Choosing Sollyverse means partnering with a team that is committed
            to your success. We offer personalized service, innovative
            solutions, and a proven track record of delivering projects on time
            and within budget. Let us help you achieve your digital goals and
            take your business to the next level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

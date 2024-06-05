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
            Preparing For Your Success Provide Best IT Solutions.
          </h4>
          <p className="text-xl my-3">
            Voice and Data Systems are crucial to the success or failure of most
            businesses. any companies provide laptops, cell phones.
          </p>
          <div className="border-l-2 border-green-400 grid gap-3 p-1 pl-10 mt-3">
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is and
              reproduced below for those interested. Sections 1.10.32 and also
              1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are alse
              reproduced in their exact original form, accompanied
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is and
              reproduced below for those interested
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

import React from "react";
import aboutContent from "@/data/aboutContent";
import Reason from "@/components/about/reason";
import team from "@/data/team";
import TeamMember from "@/components/teamMember";

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
      <div className="grid grid-cols-1 md:grid-cols-2">
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
      <div className="px-5 sm:px-10 py-16">
        <div>
          <h3 className="font-semibold text-green-600">TEAM MEMBERS</h3>
          <h4 className="text-3xl font-semibold">
            Our Awesome Creative Team Member
          </h4>
        </div>
        <div className="flex items-center justify-around gap-4 mt-6">
          {team.results.map(
            (member, index) =>
              index < 4 && <TeamMember member={member} key={index} />
          )}
        </div>
      </div>
    </div>
  );
};

export default About;

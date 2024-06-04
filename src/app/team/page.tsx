import TeamMember from "@/components/teamMember";
import team from "@/data/team";

const Team = () => {
  return (
    <div>
      <div className="grid place-content-center gap-6 py-20">
        <img
          src="/logo.png"
          alt="Sollyverse"
          width={undefined}
          className="w-36 block mx-auto"
        />
        <h4 className="font-semibold text-2xl text-center">Meet The Team</h4>
        <p className="text-center max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis alias
          non voluptate id eos.
        </p>
      </div>
      <div className="flex justify-center items-center gap-3 flex-wrap max-w-6xl mx-auto">
        {team.results.map((member, index) => (
          <TeamMember member={member} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Team;

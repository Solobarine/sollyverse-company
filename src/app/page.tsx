import Reviews from "@/components/home/reviews";
import Services from "@/components/home/services";
import TeamManagement from "@/components/teamManagement";

const Home = () => {
  return (
    <div className="relative">
      <div className="hero min-h-lvh flex items-start justify-between px-3 py-10 sm:px-20 sm:py-36">
        <div className="sticky left-0 z-10">
          <h2 className="text-3xl sm:text-5xl dark:filter">
            Transforming Ideas into <br /> Cutting-Edge Software Solutions
          </h2>
          <p className="mt-2 max-w-lg backdrop-blur-md text-justify">
            Partner with us to bring your vision to life. From innovative
            startups to established enterprises, our expert developers and
            designers craft bespoke software that drives success and accelerates
            growth. Let's build something amazing together.
          </p>
        </div>
        <img
          src="/coding1.png"
          alt=""
          width={undefined}
          className="absolute right-0 top-36 sm:top-10 w-full max-w-lg"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-8 p-10">
        <div className="px-14 border-l-4 border-green-400 grid gap-3">
          <h3 className="text-2xl text-green-400 font-semibold">1+</h3>
          <h4 className="text-lg font-semibold">Years in Business</h4>
          <p className="text-sm text-gray-500">
            With over a year of industry experience, we have honed our skills
            and refined our processes to deliver top-tier software solutions.
            Our journey is marked by innovation, growth, and a commitment to
            excellence.{" "}
          </p>
        </div>
        <div className="px-14 border-l-4 border-green-400 grid gap-3">
          <h3 className="text-2xl text-green-400 font-semibold">10+</h3>
          <h4 className="text-lg font-semibold">Projects Completed</h4>
          <p className="text-sm text-gray-500">
            Our portfolio boasts over 10 successfully completed projects, each
            tailored to meet unique client needs. From dynamic startups to
            established enterprises, our expertise spans a wide range of
            industries and technologies.{" "}
          </p>
        </div>
        <div className="px-14 border-l-4 border-green-400 grid gap-3">
          <h3 className="text-2xl text-green-400 font-semibold">98%</h3>
          <h4 className="text-lg font-semibold">Customer Satisfaction</h4>
          <p className="text-sm text-gray-500">
            Customer satisfaction is our top priority, and it shows in our 98%
            satisfaction rate. We pride ourselves on exceeding expectations
            through exceptional service, quality craftsmanship, and unwavering
            support.{" "}
          </p>
        </div>
      </div>
      <Services />
      <TeamManagement />
      <Reviews />
    </div>
  );
};

export default Home;

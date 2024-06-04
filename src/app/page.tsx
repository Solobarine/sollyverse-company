import Reviews from "@/components/home/reviews";
import Services from "@/components/home/services";
import TeamManagement from "@/components/teamManagement";

const Home = () => {
  return (
    <div className="relative">
      <div className="hero min-h-lvh flex items-start justify-between px-3 py-10 sm:px-20 sm:py-36">
        <div className="sticky left-0 z-10">
          <h2 className="text-3xl sm:text-5xl font-semibold dark:filter">
            Innovative Web Solutions for You <br /> and Your Business Needs
          </h2>
          <p className="mt-2 max-w-lg backdrop-blur-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            totam molestiae dolores provident quo.
          </p>
        </div>
        <img
          src="/coding1.png"
          alt=""
          width={undefined}
          className="absolute right-0 top-36 sm:top-10 w-full max-w-lg"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto gap-8 p-10">
        <div className="px-14 border-l-4 border-green-400 grid gap-3">
          <h3 className="text-2xl text-green-400 font-semibold">3+</h3>
          <h4 className="text-lg font-semibold">Years in Business</h4>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            incidunt quaerat veritatis numquam! Nobis.
          </p>
        </div>
        <div className="px-14 border-l-4 border-green-400 grid gap-3">
          <h3 className="text-2xl text-green-400 font-semibold">30+</h3>
          <h4 className="text-lg font-semibold">Projects Completed</h4>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            incidunt quaerat veritatis numquam! Nobis.
          </p>
        </div>
        <div className="px-14 border-l-4 border-green-400 grid gap-3">
          <h3 className="text-2xl text-green-400 font-semibold">3+</h3>
          <h4 className="text-lg font-semibold">Years in Business</h4>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            incidunt quaerat veritatis numquam! Nobis.
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

const Service = ({
  service,
}: {
  service: {
    title: string;
    description: string;
    icon: string;
  };
}) => {
  return (
    <div className="bg-white dark:bg-slate-600 shadow-md rounded-lg p-5 grid gap-4">
      <p className="text-4xl">{service.icon}</p>
      <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="text-sm">{service.description}</p>
      <hr className="mt-6" />
      <button className="w-fit mx-auto bg-green-400 text-white px-4 py-1 rounded-md shadow-md">
        Learn More
      </button>
    </div>
  );
};

export default Service;

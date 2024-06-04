import services from "@/data/services";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>Services - Sollyverse</title>
        <meta
          name="description"
          content="Explore the wide range of services offered by Sollyverse."
        />
      </Head>
      <div className="bg-gray-100 dark:bg-transparent py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-200">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

import Image from "next/image";

const Book = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-blue-900 text-white rounded-lg p-6 space-y-6 lg:space-y-0 lg:space-x-6 my-10">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">
          Book a free 30-minute strategy session with a Sollyverse expert today
        </h2>
        <p className="mb-4">
          Discover how Sollyverse can help you setup for success in meeting your
          business and technology potential.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Book a consultation →
        </a>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src="/path/to/your/image.jpg"
          alt="Consultation"
          width={500} // Adjust width accordingly
          height={300} // Adjust height accordingly
          className="rounded-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Book;

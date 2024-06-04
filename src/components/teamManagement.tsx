const TeamManagement = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 bg-white dark:bg-slate-600">
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          A wider view in your team management
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Lorem ipsum sir dolor amet ipsum sir dolor amet ipsum sir dolor amet
        </p>
        <button className="bg-green-400 dark:bg-green-600 text-white px-6 py-2 rounded-md mb-8 md:mb-0">
          Learn more
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              src="https://img.icons8.com/stickers/100/parallel-tasks.png"
              alt="Project structure icon"
              width={undefined}
              className="h-12 w-12 mr-4"
            />
            <h3 className="text-xl font-semibold">Project structure</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Lorem ipsum sir dolor amet ipsum sir dolor amet ipsum sir dolor amet
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              src="https://img.icons8.com/color/48/timeline-week.png"
              alt="Timeline planning icon"
              width={undefined}
              className="h-12 w-12 mr-4"
            />
            <h3 className="text-xl font-semibold">Timeline planning</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Lorem ipsum sir dolor amet ipsum sir dolor amet ipsum sir dolor amet
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              src="https://img.icons8.com/3d-fluency/94/user-group-man-woman--v4.png"
              alt="Team management icon"
              width={undefined}
              className="h-12 w-12 mr-4"
            />
            <h3 className="text-xl font-semibold">Team management</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Lorem ipsum sir dolor amet ipsum sir dolor amet ipsum sir dolor amet
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              src="https://img.icons8.com/3d-fluency/94/accounting.png"
              alt="Financial control icon"
              width={undefined}
              className="h-12 w-12 mr-4"
            />
            <h3 className="text-xl font-semibold">Financial control</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Lorem ipsum sir dolor amet ipsum sir dolor amet ipsum sir dolor amet
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;

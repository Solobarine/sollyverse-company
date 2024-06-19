const TeamManagement = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 bg-white dark:bg-slate-600">
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Inside Our Project Management Mastery
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Gain exclusive insights into our meticulous project management
          approach.
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
            Our robust project structure ensures clarity and efficiency at every
            stage. We meticulously plan, organize, and execute each project
            phase, providing a solid foundation for successful outcomes.
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
            Effective time planning is key to our success. We create detailed
            timelines and schedules, allowing for precise delivery and the
            flexibility to adapt to any changes or challenges that arise.
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
            Our experienced leaders excel in team management, fostering
            collaboration and maintaining clear communication. We ensure every
            team member is aligned with project goals, maximizing productivity
            and innovation.
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
            We prioritize time control to keep projects on track. By
            continuously monitoring progress and adjusting as needed, we ensure
            timely completion without compromising quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;

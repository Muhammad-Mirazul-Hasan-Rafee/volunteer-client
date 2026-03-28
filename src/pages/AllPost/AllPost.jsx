import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const AllPost = () => {
  const [jobs, setJobs] = useState([]);

  //  const [searchText, setSearchText] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const filtered = originalJobs.filter((job) =>
  //       job.title.toLowerCase().includes(searchText.toLowerCase())
  //     );

  //     setJobs(filtered);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);
  return (
    <div className="bg-gray-900">
      <br />
      {/* search bar */}
      <div className="flex justify-end mb-4">
        <form>
          <label className="flex items-center gap-2 px-4 py-2 bg-slate-800/70 backdrop-blur-md border border-gray-700 rounded-xl shadow-sm focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500 transition">
            {/* icon */}
            <svg
              className="h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>

            {/* input */}
            <input
              name="search"
              type="search"
              placeholder="Search applications..."
              className="bg-transparent outline-none text-sm text-gray-200 placeholder-gray-400 w-40 sm:w-56"
            />

            {/* button */}
            <button
              type="submit"
              className="text-xs text-gray-300 hover:text-white"
            >
              Search
            </button>
          </label>
        </form>
      </div>

      <div className="text-center text-white py-10">
        <h2 className="text-2xl font-bold mb-2">
          Start Exploring Now 🔥 {jobs.length}
        </h2>
        <p className="text-gray-400">
          Apply to the latest openings and move one step closer to your goal.
        </p>
      </div>

      {/* ................................All job cards........................................... */}
{
  jobs.map((job)=> <JobCard job={job} key={job._id}></JobCard>)
}
    </div>
  );
};

export default AllPost;

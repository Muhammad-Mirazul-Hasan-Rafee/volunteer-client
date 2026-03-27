import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplications = () => {
  const { user, loading } = useAuth();



  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(`http://localhost:5000/job-applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);    
        setJobs(data);
      });
  }, [user]);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-slate-900">
      {jobs.length === 0 ? (
        <p className="font-semibold text-white">If you already applied to any job already , Please wait...</p>
      ) : (
        <p className="font-semibold text-white">
          Total: You’ve applied to{" "}
          <span className="text-yellow-400">{jobs.length}</span> opportunities.
          All your applications are organized here for easy tracking.🔥
        </p>
      )}
      <br />
 
      <p className="font-extrabold text-gray-200 text-center sm:mx-auto sm:text-center md:mx-auto">See your job applications</p>
      <br />

      {/* table */}

      <div className="relative overflow-x-auto bg-slate-900 shadow-xs rounded-base   border-black">
<table className="w-full text-sm text-left rtl:text-right text-body border-2 border-black">
  <thead className="text-sm text-body bg-slate-900 border border-black">
    <tr className="shadow-2xl">
      <th scope="col" className="px-6 py-3 font-medium text-yellow-300 text-center">
        No.
      </th>
      <th scope="col" className="px-6 py-3 font-medium text-yellow-300 text-center">
        Title
      </th>
      <th scope="col" className="px-6 py-3 font-medium text-yellow-300 text-center">
        Category
      </th>
      <th scope="col" className="px-6 py-3 font-medium text-yellow-300 text-center">
        Location
      </th>
      <th scope="col" className="px-6 py-3 font-medium text-yellow-300 text-center">
        Salary
      </th>
      <th scope="col" className="px-6 py-3 font-medium text-yellow-300 text-center">
        Deadline
      </th>
      <th scope="col" className="px-6 py-3 font-medium text-yellow-300 text-center">
        <span className="sr-only">X</span>
      </th>
    </tr>
  </thead>
  <tbody>
  {jobs.map((job , idx)=> (  <tr key={job._id} job={job} className="bg-neutral-primary-soft border border-black hover:bg-neutral-secondary-medium">
      <th 
        scope="row"
        className="px-6 py-4 font-medium text-heading whitespace-nowrap text-white text-center shadow-xl"
      >
        {(idx+1)}
      </th>
      <th 
        scope="row"
        className="px-6 py-4 font-medium text-heading whitespace-nowrap text-white text-center shadow-xl"
      >
        {job.title}
      </th>
      <td className="px-6 py-4 text-white text-center">{job.category}</td>
      <td className="px-6 py-4 text-white text-center">{job.location}</td>
      <td className="px-6 py-4 text-white text-center">{job.salary.min} {job.salary.currency} - {job.salary.max} {job.salary.currency}</td>
      <td className="px-6 py-4 text-white text-center">{job.deadline}</td>
      <td className="px-6 py-4 text-white text-right">
        <a href="#" className="text-red-700 font-extrabold">
          X
        </a>
      </td>
    </tr>))}

  </tbody>
</table>

        <br />
        <p className="text-sm text-white mt-4">
  You can track all your applications above. Stay active and keep applying to increase your chances of getting selected.
</p>
      </div>
    </div>
  );
};

export default MyApplications;

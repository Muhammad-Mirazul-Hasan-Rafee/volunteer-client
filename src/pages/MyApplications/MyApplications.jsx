import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  // Delete application by user
  const deleteApplication = (_id) => {
    Swal.fire({
      title: "Withdraw your application?",
      text: "This action will permanently remove your application and cannot be undone.",
      icon: "warning",
      background: "#0B0F19", // soft black
      color: "#e2e8f0", // text-gray-200
      showCancelButton: true,
      confirmButtonColor: "#b91c1c",
      cancelButtonColor: "#475569",
      confirmButtonText: "Withdraw application!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/jobs/${_id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const restApplications = jobs.filter((job) => job._id !== _id);
              setJobs(restApplications);
            }
          });
        Swal.fire({
          title: "Application Withdrawn",
          text: "Your application has been successfully removed.",
          icon: "success",
          background: "#334155",
          color: "#e2e8f0",
          confirmButtonColor: "#22c55e", // green-500
        });
      }
    });
  };

  return (
    <div className="bg-slate-900">
      <br />
      {jobs.length === 0 ? (
        <div>
          <p className="font-semibold text-white text-center">
            You haven’t applied to any opportunities yet. Explore exciting roles
            and stay active to maximize your chances of landing your next role!
          </p>
          <p className="font-semibold text-white text-center">
            Your journey is just beginning. Explore your next{" "}
            <Link
              to="/allpost"
              className="text-blue-400 underline hover:text-blue-500"
            >
              Challenge
            </Link>{" "}
            💡
          </p>
        </div>
      ) : (
        <div>
      <p className="font-semibold text-white">
          Total: You’ve applied to{" "}
          <span className="text-yellow-400">{jobs.length}</span> opportunities.
          All your applications are organized here for easy tracking.🔥
        </p>
        <br />


        

          {/* Table */}
          <div className="mb-14 relative overflow-x-auto bg-slate-900 shadow-xs rounded-base border-black">
            <h4 className="font-semibold text-white text-center p-4">Here are your applications</h4>
            <table className="w-full text-sm text-left rtl:text-right text-body border-2 border-black">
              <thead className="text-sm text-body bg-slate-900 border border-black">
                <tr className="shadow-2xl">
                  <th className="px-6 py-3 font-medium text-yellow-300 text-center">
                    No.
                  </th>
                  <th className="px-6 py-3 font-medium text-yellow-300 text-center">
                    Title
                  </th>
                  <th className="px-6 py-3 font-medium text-yellow-300 text-center">
                    Category
                  </th>
                  <th className="px-6 py-3 font-medium text-yellow-300 text-center">
                    Location
                  </th>
                  <th className="px-6 py-3 font-medium text-yellow-300 text-center">
                    Salary
                  </th>
                  <th className="px-6 py-3 font-medium text-yellow-300 text-center">
                    Deadline
                  </th>
                  <th className="px-6 py-3 font-medium text-yellow-300 text-center">
                    <span className="sr-only">X</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, idx) => (
                  <tr
                    key={job._id}
                    className="bg-neutral-primary-soft border border-black hover:bg-neutral-secondary-medium"
                  >
                    <th className="px-6 py-4 font-medium text-white text-center shadow-xl">
                      {idx + 1}
                    </th>
                    <th className="px-6 py-4 font-medium text-white text-center shadow-xl">
                      {job.title}
                    </th>
                    <td className="px-6 py-4 text-white text-center">
                      {job.category}
                    </td>
                    <td className="px-6 py-4 text-white text-center">
                      {job.location}
                    </td>
                    <td className="px-6 py-4 text-white text-center">
                      {job.salary.min} {job.salary.currency} - {job.salary.max}{" "}
                      {job.salary.currency}
                    </td>
                    <td className="px-6 py-4 text-white text-center">
                      {job.deadline}
                    </td>
                    <td className="px-6 py-4 text-white text-right">
                      <button
                        onClick={() => deleteApplication(job._id)}
                        className="text-red-700 font-extrabold"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* <p className="font-semibold text-white text-center">
        You haven’t applied to any opportunities yet. Explore exciting roles and
        stay active to maximize your chances of landing your next role!
      </p> */}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tip 1 */}
        <div className="bg-slate-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-yellow-400 font-semibold mb-2">
            📌 Stay Updated
          </h3>
          <p className="text-sm text-gray-300">
            Check your applications regularly to stay informed about responses
            and deadlines.
          </p>
        </div>

        {/* Tip 2 */}
        <div className="bg-slate-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-yellow-400 font-semibold mb-2">
            🚀 Improve Your Chances
          </h3>
          <p className="text-sm text-gray-300">
            Keep your resume and profile updated to stand out among other
            applicants.
          </p>
        </div>

        {/* Tip 3 */}
        <div className="bg-slate-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-yellow-400 font-semibold mb-2">
            💡 Apply Smartly
          </h3>
          <p className="text-sm text-gray-300">
            Focus on roles that match your skills and apply consistently to
            increase success.
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/allpost"
          className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Browse More Jobs
        </Link>
      </div>

      {/* Activity Summary */}
      <div className="mt-6 bg-slate-800 p-4 rounded-lg border border-gray-700 text-center">
        <h3 className="text-yellow-400 font-semibold mb-2">📊 Your Activity</h3>
        <p className="text-sm text-gray-300">
          You’ve applied to{" "}
          <span className="text-white font-bold">{jobs.length}</span>{" "}
          opportunities so far. Stay consistent and keep applying to increase
          your chances of success.
        </p>
      </div>

      {/* Quick Tips */}
      <div className="mt-4 bg-slate-800 p-4 rounded-lg border border-gray-700 text-center">
        <h3 className="text-yellow-400 font-semibold mb-2">⚡ Quick Tips</h3>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>✔ Customize your resume for each job</li>
          <li>✔ Apply early before deadlines</li>
          <li>✔ Keep checking for updates regularly</li>
        </ul>
      </div>

      {/* Next Step / Motivation */}
      <div className="mt-4 bg-slate-800 p-5 rounded-lg border border-gray-700 text-center">
        <h3 className="text-white font-semibold text-lg mb-2">
          🎯 Keep Moving Forward
        </h3>
        <p className="text-sm text-gray-300 mb-4">
          Every application brings you closer to the right opportunity. Stay
          consistent, improve your profile, and keep exploring new roles.
        </p>
        <Link
          to="/allpost"
          className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Explore More Opportunities
        </Link>
      </div>
    </div>
  );
};

export default MyApplications;

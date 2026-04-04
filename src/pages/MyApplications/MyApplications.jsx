import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import MyApplicationTable from "./MyApplicationTable";
//import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";

const MyApplications = () => {
  const { user} = useAuth();
  const [jobs, setJobs] = useState([]);

  //const axiosSecure = useAxiosSecure();
 console.log("in application" , user?.email);
  useEffect(() => {
    if (!user?.email) return;
   
    // axiosSecure
    //   .get("/job-applications")
    //   .then((res) => {
    //     if (Array.isArray(res.data)) {
    //       setJobs(res.data);
    //     } else {
    //       setJobs([]);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setJobs([]);
    //   });

    axios.get(`http://localhost:5000/job-applications?email=${user.email}`, {withCredentials: true})
    .then((res)=> setJobs(res.data))
  }, [user?.email]);

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
        axios.delete(`/job-applications/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setJobs((prev) => prev.filter((job) => job._id !== _id));
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
       
      }
    });
  };

  return (
    <div className="bg-gray-900">
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
            <span className="text-yellow-400">{jobs.length}</span>{" "}
            opportunities. All your applications are organized here for easy
            tracking.🔥
          </p>
          <br />

          {/* Table */}
          <div className="mb-14 relative overflow-x-auto bg-slate-900 shadow-xs rounded-base border-black">
            <h4 className="font-semibold text-white text-center p-4">
              Here are your applications
            </h4>
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
                  <MyApplicationTable
                    job={job}
                    deleteApplication={deleteApplication}
                    key={job._id}
                    index={idx}
                  ></MyApplicationTable>
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

import React from "react";
import Lottie from "lottie-react";
import animationLottie from "../../assets/Lottie/lottie1.json";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleApply = (e) => {
    e.preventDefault();

    const initialData = new FormData(e.target);
    const formData = Object.fromEntries(initialData.entries());

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      github: formData.github,
      linkedIn: formData.linkedIn,
      resume: formData.resume,
    };

    console.log(jobApplication);

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title:
              '<span style="color:#FFFFFF">Thanks for your application!</span>',
            text: "We received your application and will get back to you soon.",
            icon: "success",
            background: "#0F172A",
            color: "#fff",
            confirmButtonColor: "#3B82F6",
          });

          navigate("/myApplications");
        }
      });
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white py-10 px-4">
      <h3 className="text-center text-yellow-400 font-bold max-w-xl mx-auto mt-2">
        Please provide your professional links and resume. We’ll review your
        application and get back to you soon.
      </h3>

      <br />

      {/* container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* animation */}
        <div className="flex justify-center">
          <div className="w-72 h-72 sm:w-80 sm:h-80">
            <Lottie.default animationData={animationLottie} loop />
          </div>
        </div>

        {/* form */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg w-full">
          <form onSubmit={handleApply} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium">Github</label>
              <input
                type="url"
                name="github"
                placeholder="GitHub link"
                className="w-full px-3 py-2 rounded-md bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">LinkedIn</label>
              <input
                type="url"
                name="linkedIn"
                placeholder="LinkedIn link"
                className="w-full px-3 py-2 rounded-md bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Resume</label>
              <input
                type="url"
                name="resume"
                placeholder="Resume link"
                className="w-full px-3 py-2 rounded-md bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-md py-2 font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;

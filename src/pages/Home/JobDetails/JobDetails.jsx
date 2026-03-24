import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaUsers,
  FaBriefcase,
  FaClock,
  FaShareAlt,
  FaBookmark,
  FaChevronRight,
  FaStar,
  FaRegStar,
  FaTag,
  FaImage,
} from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdWorkOutline, MdAttachMoney, MdCategory } from "react-icons/md";

const JobDetails = () => {
  const details = useLoaderData();
  const jobData = Array.isArray(details) ? details[0] : details;
  const {
    _id,
    title,
    category,
    location,
    thumbnail,
    deadline,
    organizerName,
    organizerEmail,
    number,
    salary,
    responsibilities,
    requirements,
    description,
  } = jobData;

  // Mock data for demonstration - replace with actual data
  const company = organizerName || "Welfare Company";
  const status = "active";
  const applicationDeadline = deadline || "2024-12-31";
  //   const jobType = "Full Time";
  //   const requirements = [
  //     "Bachelor's degree in related field",
  //     "3+ years of experience",
  //     "Strong communication skills",
  //     "Team player",
  //     "Problem-solving mindset",
  //   ];
  //   const responsibilities = [
  //     "Lead technical projects",
  //     "Mentor junior team members",
  //     "Collaborate with cross-functional teams",
  //     "Deliver high-quality solutions",
  //   ];
  const hr_email = organizerEmail || "hr@company.com";
  //   const rating = 4.5;
  //   const totalReviews = 128;

  // Category color mapping
  const getCategoryColor = (cat) => {
    const colors = {
      Healthcare: "from-green-500 to-emerald-600",
      Technology: "from-blue-500 to-cyan-600",
      Education: "from-yellow-500 to-orange-600",
      Finance: "from-purple-500 to-pink-600",
      Marketing: "from-pink-500 to-rose-600",
      Design: "from-indigo-500 to-purple-600",
      Sales: "from-green-500 to-teal-600",
      Engineering: "from-gray-500 to-slate-600",
    };
    return colors[cat] || "from-blue-500 to-purple-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb with Animation */}
        <div className="flex items-center text-sm text-slate-400 mb-6 animate-fadeIn">
          <a href="/" className="hover:text-blue-400 transition-colors">
            Home
          </a>
          <FaChevronRight className="mx-2 text-xs" />
          <a href="/jobs" className="hover:text-blue-400 transition-colors">
            Jobs
          </a>
          <FaChevronRight className="mx-2 text-xs" />
          <a
            href={`/jobs/${category?.toLowerCase()}`}
            className="hover:text-blue-400 transition-colors"
          >
            {category}
          </a>
          <FaChevronRight className="mx-2 text-xs" />
          <span className="text-blue-400 font-medium">{title}</span>
        </div>

        {/* Main Card */}
        <div className="relative group">
          {/* Background Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

          {/* Main Content Card */}
          <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
            {/* ================= Header with Thumbnail ================= */}
            <div className="p-6 border-b border-slate-700">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Thumbnail - Small and on the side */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-50"></div>
                  <img
                    src={
                      thumbnail ||
                      "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                    }
                    alt={title}
                    className="relative w-full h-full object-cover rounded-2xl border-2 border-white/20 shadow-xl"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80";
                    }}
                  />
                  {/* Optional: Add a small icon overlay */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-slate-800">
                    <FaImage className="text-white text-xs" />
                  </div>
                </div>

                {/* Title and Basic Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {title}
                      </h1>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="flex items-center gap-1 text-slate-300">
                          <FaMapMarkerAlt className="text-blue-400" />
                          {location || "Remote"}
                        </span>
                        {/* <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                        <span className="flex items-center gap-1 text-slate-300">
                          <FaStar className="text-yellow-400" />
                          {rating} ({totalReviews} reviews)
                        </span> */}
                        <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(
                            category
                          )} text-white`}
                        >
                          {category || "General"}
                        </span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        status === "active"
                          ? "bg-green-500/20 text-green-300 border border-green-500/50"
                          : "bg-red-500/20 text-red-300 border border-red-500/50"
                      }`}
                    >
                      <span
                        className={`inline-block w-2 h-2 rounded-full mr-2 ${
                          status === "active"
                            ? "bg-green-400 animate-pulse"
                            : "bg-red-400"
                        }`}
                      ></span>
                      {status === "active" ? "Active" : "Closed"}
                    </span>
                  </div>

                  {/* Company and Job ID */}
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                        {company.charAt(0)}
                      </div>
                      <span className="text-slate-300">{company}</span>
                    </div>
                    <span className="text-sm text-slate-500">|</span>
                    <span className="text-sm text-slate-400">
                      Job ID: {_id}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row md:flex-col gap-2 items-start">
                  <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors group">
                    <FaBookmark className="text-slate-400 group-hover:text-yellow-400 transition-colors" />
                  </button>
                  <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors group">
                    <FaShareAlt className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </button>
                </div>
              </div>
            </div>

            {/* ================= Body ================= */}
            <div className="p-6 space-y-8">
              {/* Meta Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="group relative bg-slate-700/30 rounded-xl p-4 border border-slate-600/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <FaCalendarAlt className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Deadline</p>
                      <p className="font-semibold text-white">
                        {applicationDeadline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-slate-700/30 rounded-xl p-4 border border-slate-600/50 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <MdAttachMoney className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Salary</p>
                      <p className="font-semibold text-white">
                        {salary.min} – {salary.max}{" "}
                        {salary.currency}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-slate-700/30 rounded-xl p-4 border border-slate-600/50 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <FaUsers className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Openings</p>
                      <p className="font-semibold text-white">
                        {number} Positions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-slate-700/30 rounded-xl p-4 border border-slate-600/50 hover:border-yellow-500/50 transition-all hover:shadow-lg hover:shadow-yellow-500/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <FaBriefcase className="text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Job Type</p>
                      {/* <p className="font-semibold text-white">{jobType}</p> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-gradient-to-br from-slate-700/20 to-slate-800/20 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <HiOutlineLightBulb className="text-yellow-400" />
                  Job Description
                </h3>
                <div className="text-slate-300 leading-relaxed">
                  {description && Array.isArray(description) ? (
                    <ul className="space-y-3">
                      {description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{description || "No description available"}</p>
                  )}
                </div>
              </div>

              {/* Requirements & Responsibilities */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-700/20 rounded-xl p-6 border border-slate-600/50">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-red-400 rounded-full"></span>
                    Requirements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {requirements.map((item, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg text-sm border border-slate-600 hover:border-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-300 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-700/20 rounded-xl p-6 border border-slate-600/50">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-green-400 rounded-full"></span>
                    Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {responsibilities.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer / Actions */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-slate-700">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    <FaEnvelope className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Contact HR</p>
                    <a
                      href={`mailto:${hr_email}`}
                      className="text-sm hover:text-blue-400 transition-colors"
                    >
                      {hr_email}
                    </a>
                  </div>
                </div>

                  <Link to={`/jobApply/${_id}`} className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default JobDetails;

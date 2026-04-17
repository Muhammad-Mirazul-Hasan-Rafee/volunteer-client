import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    const {_id , title , category , location , deadline , organizerName , organizerEmail , number , description , salary} = job;

    const jobDescription = Array.isArray(description)
  ? job.description.join(" ")
  : job.description || "";
    return (
    <div className="m-8 relative bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900
border border-gray-600 rounded-2xl p-12 
hover:shadow-2xl hover:shadow-indigo-500/10 
hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">

  {/* Glow Accent */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>

  {/* HEADER */}
  <div className="flex items-start justify-between mb-4 z-10">
    
    <div>
      <h2 className="text-lg font-semibold text-white leading-snug">
        {title}
      </h2>
      <p className="text-xs text-gray-300 mt-1">
        {category} • {location}
      </p>
    </div>

    <span className="text-[10px]  tracking-wide text-green-500 bg-indigo-500/10 px-2 py-1 rounded-md">
      Open
    </span>
  </div>

  {/* DESCRIPTION */}
  <p className="text-sm text-gray-200 leading-relaxed mb-5 z-10">
    {jobDescription.split(" ").slice(0, 100).join(" ")}...
  </p>

  {/* META */}
  <div className="space-y-1 text-xs text-gray-300 mb-5 z-10">
    <p>👤 {organizerName}</p>
    <p>📧 {organizerEmail}</p>
    <p>📞 {number}</p>
  </div>

  {/* FOOTER */}
  <div className="flex items-center justify-between pt-4 border-t border-gray-700 z-10">
    
    <div className="text-xs">
      <p className="text-emerald-400 font-medium">
        {salary?.min} - {salary?.max} {salary?.currency}
      </p>
      <p className="text-rose-400 mt-1">Deadline: {deadline}</p>
    </div>

    <Link to={`/jobs/${_id}`}
      className="text-sm bg-gradient-to-r from-indigo-500 to-cyan-500 
      text-white px-4 py-2 rounded-lg 
      hover:opacity-90 transition shadow-md"
    >
      View Details →
    </Link>
  </div>
</div>
    );
};

export default JobCard;
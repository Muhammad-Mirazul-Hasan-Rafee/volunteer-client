import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaUsers, FaMoneyBillWave, FaArrowRight, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const ShowNeedPostCard = ({ job }) => {
  const { _id, thumbnail, title, location, salary, number } = job;
  const [isLiked, setIsLiked] = useState(false);

  const getSalaryRange = () => {
    if (!salary) return "Negotiable";
    if (salary.min && salary.max) {
      return `${salary.currency || "BDT"} ${salary.min.toLocaleString()} - ${salary.max.toLocaleString()}`;
    }
    if (salary.min) return `${salary.currency || "BDT"} ${salary.min.toLocaleString()}+`;
    if (salary.max) return `Up to ${salary.currency || "BDT"} ${salary.max.toLocaleString()}`;
    return "Negotiable";
  };

  return (
    <div className="relative h-full">
      {/* Animated Background Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200"></div>
      
      {/* Main Card - Fixed Width */}
      <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-500 group hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
        
        {/* Thumbnail - Fixed Height */}
        <div className="relative h-40 overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            src={thumbnail || "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}
            alt={title}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          
          {/* Category Badge */}
          {job.category && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-0.5 bg-purple-500/90 backdrop-blur-sm rounded-full text-[10px] font-medium text-white shadow-lg">
                {job.category}
              </span>
            </div>
          )}
          
          {/* Like Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-3 right-3 p-1.5 bg-black/40 backdrop-blur-md rounded-full hover:bg-black/60 transition-all duration-300 hover:scale-110"
          >
            <FaRegHeart className={`text-sm transition-all duration-300 ${isLiked ? "fill-red-500 text-red-500" : "text-white"}`} />
          </button>
        </div>
        {/* Content - Flexible Height */}
        <div className="p-4 flex flex-col flex-1">
          {/* Title */}
          <div className="mb-3">
            <h3 className="text-base font-bold text-white mb-1 line-clamp-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
              {title || "Untitled Position"}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <FaMapMarkerAlt className="text-blue-400 text-[10px]" />
              <span className="text-xs truncate">{location || "Location not specified"}</span>
            </div>
          </div>

          {/* Stats Cards - Compact */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {/* Salary */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-lg p-2 border border-slate-700 group-hover:border-green-500/30 transition-all duration-300">
              <div className="flex items-center gap-1 mb-0.5">
                <FaMoneyBillWave className="text-green-400 text-[10px]" />
                <span className="text-[9px] text-slate-400">Salary</span>
              </div>
              <p className="text-[11px] font-semibold text-green-400 truncate">
                {getSalaryRange()}
              </p>
            </div>

            {/* Volunteers */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-lg p-2 border border-slate-700 group-hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-1 mb-0.5">
                <FaUsers className="text-purple-400 text-[10px]" />
                <span className="text-[9px] text-slate-400">Openings</span>
              </div>
              <p className="text-[11px] font-semibold text-white truncate">
                {number ? `${number} pos` : "Flexible"}
              </p>
            </div>
          </div>

          {/* Deadline Progress Bar - Compact */}
          {job.deadline && (
            <div className="mb-4">
              <div className="flex justify-between text-[9px] text-slate-400 mb-0.5">
                <span>Deadline</span>
                <span>{job.deadline}</span>
              </div>
              <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-auto">
            <Link to={`/jobs/${_id}`}>
              <button className="group/btn w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-medium transition-all duration-300 flex items-center justify-center gap-1 shadow-lg shadow-purple-500/25 hover:shadow-xl">
                <span>View Details</span>
                <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowNeedPostCard;
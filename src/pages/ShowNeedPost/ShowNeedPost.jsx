
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import ShowNeedPostCard from "./ShowNeedPostCard";
const ShowNeedPost = () => {
  const jobs = useLoaderData();
 console.log(jobs);


  return (
    <div className="bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 mb-32 ">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          className="text-2xl md:text-3xl font-bold text-white"
        >
          Volunteer Needs Now
        </motion.p>

        <p className="mt-3 text-sm md:text-base text-gray-300 max-w-2xl text-left leading-relaxed md:leading-loose">
          Discover meaningful opportunities where your time and skills can make
          an immediate impact. Here you’ll find the most urgent volunteer needs,
          sorted by upcoming deadlines so you never miss a chance to help.
          Explore the listings below and take the first step toward making a
          difference today.
        </p>
      </div>

      {/* Card for jobs */}
      <div className=" grid grid-cols-1  sm:grid-cols-1  md:grid-cols-2   lg:grid-cols-3  gap-3 mx-12">
        {jobs.map((job) => (<ShowNeedPostCard job={job} key={job._id} ></ShowNeedPostCard>

      ))}
      </div>
    </div>
  );
};

export default ShowNeedPost;

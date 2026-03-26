import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplications = () => {
  const { user, loading} = useAuth();

  console.log(user);
  console.log(user);
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
   if(loading){
        return <p>Loading...</p>;
    }

  return (
    <div>
      My applications are here
      {
                jobs.length === 0 
                ? <p>Please wait...</p>
                : <p>Total: {jobs.length}</p>
            }
    </div>
  );
};

export default MyApplications;

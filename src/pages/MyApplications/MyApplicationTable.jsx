import React from 'react';

const MyApplicationTable = ({job, index, deleteApplication}) => {
const {title , category , location , salary , deadline} = job;
    const deleteCurrentApplication = deleteApplication;
    
    return (
         <tr
               
                    className="bg-neutral-primary-soft border border-black hover:bg-neutral-secondary-medium"
                  >
                    <th className="px-6 py-4 font-medium text-white text-center shadow-xl">
                      {index + 1}
                    </th>
                    <th className="px-6 py-4 font-medium text-white text-center shadow-xl">
                      {title}
                    </th>
                    <td className="px-6 py-4 text-white text-center">
                      {category}
                    </td>
                    <td className="px-6 py-4 text-white text-center">
                      {location}
                    </td>
                    <td className="px-6 py-4 text-white text-center">
                      {salary?.min} {salary?.currency} - {salary?.max}{" "}
                      {salary?.currency}
                    </td>
                    <td className="px-6 py-4 text-white text-center">
                      {deadline}
                    </td>
                    <td className="px-6 py-4 text-white text-right">
                      <button
                        onClick={() => deleteCurrentApplication(job._id)}
                        className="text-red-700 font-extrabold"
                      >
                        X
                      </button>
                    </td>
                  </tr>
    );
};

export default MyApplicationTable;
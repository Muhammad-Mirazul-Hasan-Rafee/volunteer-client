import React, { useState } from "react";
import Swal from "sweetalert2";

const AddNeedPost = () => {
  // handle thumblain photo
  const [preview, setPreview] = useState(null);
  const handleThumb = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  const removePhoto = () => {
    setPreview(null);
  };

  // Handle Add post button
  const handleAddNeedPost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Actual File Object:", formData.get("photo"));
    const initalData = Object.fromEntries(formData.entries());
    console.log(initalData);

    const { ...restFormData } = initalData;

    restFormData.description = restFormData.description.split("\n");
    console.log(restFormData);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(restFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: '<span style="color:#FFFFFF">Successfully posted!</span>',
            icon: "success",
            draggable: true,
            background: "#0F172A",
          });
        }
      });
  };
  return (
    <div className="h-full bg-gray-900">
      <div className="flex min-h-full h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Add post for volunteer need
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleAddNeedPost} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm/6 font-medium text-gray-100">
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="title"
                  required
                  autoComplete="title"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            {/* ..................category and location........................ */}
            <div className="grid grid-cols-1  md:flex md:justify-between md:items-center  ">
              {/* Category */}
              <div>
                <label className="block text-sm/6 font-medium text-gray-100">
                  Category
                </label>
                <div className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                  <select
                    name="category"
                    id=""
                    defaultValue=""
                    className="bg-black"
                  >
                    <option value="" disabled>
                      select category
                    </option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Social Service</option>
                    <option>Animal Welfare</option>
                  </select>
                </div>
              </div>
              {/* Location
               */}
              <div>
                <label className="block text-sm/6 font-medium text-gray-100">
                  Location
                </label>
                <div className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                  <select
                    name="location"
                    id=""
                    defaultValue=""
                    className="bg-black"
                  >
                    <option value="" disabled>
                      select location
                    </option>
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Cumilla</option>
                    <option>Rajshahi</option>
                  </select>
                </div>
              </div>
            </div>

            {/* .........................Thumblain and Deadline....................................... */}
            <div className="sm:grid sm:grid-cols-1 md:flex md:justify-between md:items-center">
              {/* Thumbnail */}
              <div>
                <label className="block text-sm/6 font-medium text-gray-100">
                  Upload Thumblain
                </label>

                <label
                  className="mt-2 flex items-center justify-center w-full h-10
          rounded-md bg-white/5 hover:bg-white/10 cursor-pointer
          text-gray-300 text-sm"
                >
                  Choose Photo
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handleThumb}
                    className="hidden"
                  />
                </label>

                {preview && (
                  <div className="mt-3 flex items-center gap-4">
                    <img
                      src={preview}
                      alt="preview"
                      className="w-20 h-20 object-cover rounded-md"
                    />

                    <button
                      type="button"
                      onClick={removePhoto}
                      className="px-3 py-1 text-xs rounded-md
            bg-red-500/20 hover:bg-red-500/30 text-red-300"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
              {/* Deadline */}
              <div>
                <label className="block text-sm/6 font-medium text-gray-100">
                  Deadline
                </label>
                <div className="mt-2">
                  <input
                    id="deadline"
                    name="deadline"
                    type="date"
                    required
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            {/* Organizer name and email */}
            <div className="sm:grid sm:grid-cols-1 md:flex md:justify-between md:items-center">
              {/* Organizer Name */}
              <div>
                <label className="block text-sm/6 font-medium text-gray-100">
                  Organizer Name
                </label>
                <div className="mt-2">
                  <input
                    id="organizerName"
                    name="organizerName"
                    type="text"
                    required
                    autoComplete="organizerName"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* Organizer Email */}
              <div>
                <label className="block text-sm/6 font-medium text-gray-100">
                  Organizer Email
                </label>
                <div className="mt-2">
                  <input
                    id="organizerEmail"
                    name="organizerEmail"
                    type="email"
                    required
                    autoComplete="organizerEmail"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            {/* No. of volunteers needed */}
            <div>
              <label className="block text-sm/6 font-medium text-gray-100">
                No. of volunteers needed
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="text"
                  inputMode="numeric"
                  required
                  autoComplete="number"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            {/* Description  */}
            <div>
              <label className="block text-sm/6 font-medium text-gray-100">
                Description
              </label>
              <div className="mt-2 ">
                <textarea
                  name="description"
                  id="description"
                  className="lg:col-span-4 min-h-20 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 "
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNeedPost;

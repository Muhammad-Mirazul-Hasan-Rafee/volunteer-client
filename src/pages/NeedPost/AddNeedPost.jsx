import React, { useState } from "react";
import Swal from "sweetalert2";

const AddNeedPost = () => {
  const [requirements, setRequirements] = useState(["", "", "", ""]);
  const [responsibilities, setResponsibilities] = useState(["", "", "", ""]);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    thumbnail: "",
    deadline: "",
    minSalary: "",
    maxSalary: "",
    salaryCurrency: "",
    organizerName: "",
    organizerEmail: "",
    number: "",
    description: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log('Experiment values:' , name , value)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Requirements functions
  const addRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  const updateRequirement = (index, value) => {
    const updated = [...requirements];
    updated[index] = value;
    setRequirements(updated);
  };

  const removeRequirement = (index) => {
    const updated = requirements.filter((_, i) => i !== index);
    setRequirements(updated);
  };

  // Responsibilities functions
  const addResponsibility = () => {
    setResponsibilities([...responsibilities, ""]);
  };

  const updateResponsibility = (index, value) => {
    const updated = [...responsibilities];
    updated[index] = value;
    setResponsibilities(updated);
  };

  const removeResponsibility = (index) => {
    const updated = responsibilities.filter((_, i) => i !== index);
    setResponsibilities(updated);
  };

  // Handle Add post button
  const handleAddNeedPost = (e) => {
    e.preventDefault();

    // Filter out empty requirements and responsibilities
    const filteredRequirements = requirements.filter(
      (req) => req.trim() !== ""
    );
    const filteredResponsibilities = responsibilities.filter(
      (resp) => resp.trim() !== ""
    );

    // Prepare data for API
    const postData = {
      title: formData.title,
      category: formData.category,
      location: formData.location,
      thumbnail: formData.thumbnail,
      deadline: formData.deadline,
      organizerName: formData.organizerName,
      organizerEmail: formData.organizerEmail,
      number: formData.number,
      description: formData.description
        .split("\n")
        .filter((item) => item.trim() !== ""),
      requirements: filteredRequirements,
      responsibilities: filteredResponsibilities,
      salary: {
        min: formData.minSalary || null,
        max: formData.maxSalary || null,
        currency: formData.salaryCurrency || "BDT",
      },
    };

    console.log("Submitting:", postData);

    fetch("https://volunteer-server-flame.vercel.app/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: '<span style="color:#FFFFFF">Successfully posted!</span>',
            text: "Your volunteer post has been created successfully.",
            icon: "success",
            draggable: true,
            background: "#0F172A",
            color: "#fff",
            confirmButtonColor: "#3B82F6",
          });

          // Reset form after successful submission
          setFormData({
            title: "",
            category: "",
            location: "",
            thumbnail: "",
            deadline: "",
            minSalary: "",
            maxSalary: "",
            salaryCurrency: "",
            organizerName: "",
            organizerEmail: "",
            number: "",
            description: "",
          });
          setRequirements(["", "", "", ""]);
          setResponsibilities(["", "", "", ""]);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          background: "#0F172A",
          color: "#fff",
          confirmButtonColor: "#3B82F6",
        });
      });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
            Add Post for Volunteer Need
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            Fill out the form below to create a new volunteer opportunity
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-2xl">
          <form onSubmit={handleAddNeedPost} className="space-y-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-slate-200"
              >
                Title <span className="text-red-400">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Healthcare Volunteer Needed"
                  className="block w-full rounded-lg bg-slate-800/50 px-4 py-2.5 text-base text-white border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm"
                />
              </div>
            </div>

            {/* Category and Location */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-slate-200"
                >
                  Category <span className="text-red-400">*</span>
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="block w-full rounded-lg bg-slate-800/50 px-4 py-2.5 text-base text-white border border-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Social Service">Social Service</option>
                    <option value="Animal Welfare">Animal Welfare</option>
                    <option value="Environment">Environment</option>
                    <option value="Disaster Relief">Disaster Relief</option>
                  </select>
                </div>
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-slate-200"
                >
                  Location <span className="text-red-400">*</span>
                </label>
                <div className="mt-2">
                  <select
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="block w-full rounded-lg bg-slate-800/50 px-4 py-2.5 text-base text-white border border-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select location
                    </option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Cumilla">Cumilla</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Barishal">Barishal</option>
                    <option value="Rangpur">Rangpur</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Thumbnail URL */}
            <div>
              <label
                htmlFor="thumbnail"
                className="block text-sm font-medium text-slate-200"
              >
                Thumbnail URL <span className="text-red-400">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="thumbnail"
                  name="thumbnail"
                  type="url"
                  required
                  value={formData.thumbnail}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className="block w-full rounded-lg bg-slate-800/50 px-4 py-2.5 text-base text-white border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm"
                />
              </div>
            </div>

            {/* Deadline */}
            <div>
              <label
                htmlFor="deadline"
                className="block text-sm font-medium text-slate-200"
              >
                Deadline <span className="text-red-400">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="deadline"
                  name="deadline"
                  type="date"
                  required
                  value={formData.deadline}
                  onChange={handleChange}
                  className="block w-full rounded-lg bg-slate-800/50 px-4 py-2.5 text-base text-white border border-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm"
                />
              </div>
            </div>

            {/* Salary Section */}
            <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">💰</span>
                <h3 className="text-base font-semibold text-white">
                  Salary Information
                </h3>
                <span className="text-xs text-slate-400">(Optional)</span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* Minimum Salary */}
                <div>
                  <label
                    htmlFor="minSalary"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Minimum Salary
                  </label>
                  <div className="mt-1">
                    <input
                      id="minSalary"
                      name="minSalary"
                      type="number"
                      min="0"
                      step="1000"
                      value={formData.minSalary}
                      onChange={handleChange}
                      placeholder="e.g., 25000"
                      className="block w-full rounded-lg bg-slate-800/50 px-4 py-2 text-base text-white border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm"
                    />
                  </div>
                </div>

                {/* Maximum Salary */}
                <div>
                  <label
                    htmlFor="maxSalary"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Maximum Salary
                  </label>
                  <div className="mt-1">
                    <input
                      id="maxSalary"
                      name="maxSalary"
                      type="number"
                      min="0"
                      step="1000"
                      value={formData.maxSalary}
                      onChange={handleChange}
                      placeholder="e.g., 50000"
                      className="block w-full rounded-lg bg-slate-800/50 px-4 py-2 text-base text-white border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm"
                    />
                  </div>
                </div>

                {/* Currency */}
                <div>
                  <label
                    htmlFor="salaryCurrency"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Currency
                  </label>
                  <div className="mt-1">
                    <select
                      id="salaryCurrency"
                      name="salaryCurrency"
                      value={formData.salaryCurrency}
                      onChange={handleChange}
                      className="block w-full rounded-lg bg-slate-800/50 px-4 py-2 text-base text-white border border-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Choose currency</option>
                      <option value="BDT">BDT (৳)</option>
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements Section with Dynamic Fields */}
            <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">📋</span>
                <h3 className="text-base font-semibold text-white">
                  Requirements
                </h3>
                <span className="text-xs text-slate-400">(Optional)</span>
              </div>

              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={req}
                      onChange={(e) => updateRequirement(index, e.target.value)}
                      placeholder={`Requirement ${index + 1}`}
                      className="flex-1 rounded-lg bg-slate-800/50 px-4 py-2 text-base text-white border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm"
                    />
                    {requirements.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeRequirement(index)}
                        className="px-3 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addRequirement}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  + Add more requirements
                </button>
              </div>
            </div>

            {/* Responsibilities Section with Dynamic Fields */}
            <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">✅</span>
                <h3 className="text-base font-semibold text-white">
                  Responsibilities
                </h3>
                <span className="text-xs text-slate-400">(Optional)</span>
              </div>

              <div className="space-y-3">
                {responsibilities.map((resp, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={resp}
                      onChange={(e) =>
                        updateResponsibility(index, e.target.value)
                      }
                      placeholder={`Responsibility ${index + 1}`}
                      className="flex-1 rounded-lg bg-slate-800/50 px-4 py-2 text-base text-white border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm"
                    />
                    {responsibilities.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeResponsibility(index)}
                        className="px-3 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addResponsibility}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  + Add more responsibilities
                </button>
              </div>
            </div>

            {/* Organizer Name and Email */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Organizer Name */}
              <div>
                <label
                  htmlFor="organizerName"
                  className="block text-sm font-medium text-slate-200"
                >
                  Organizer Name <span className="text-red-400">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="organizerName"
                    name="organizerName"
                    type="text"
                    required
                    value={formData.organizerName}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="block w-full rounded-lg bg-slate-800/50 px-4 py-2.5 text-base text-white border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm"
                  />
                </div>
              </div>

              {/* Organizer Email */}
              <div>
                <label
                  htmlFor="organizerEmail"
                  className="block text-sm font-medium text-slate-200"
                >
                  Organizer Email <span className="text-red-400">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="organizerEmail"
                    name="organizerEmail"
                    type="email"
                    required
                    value={formData.organizerEmail}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="block w-full rounded-lg bg-slate-800/50 px-4 py-2.5 text-base text-white border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Number of Volunteers Needed */}
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-slate-200"
              >
                Number of Volunteers Needed{" "}
                <span className="text-red-400">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="number"
                  required
                  min="1"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="e.g., 5"
                  className="block w-full rounded-lg bg-slate-800/50 px-4 py-2.5 text-base text-white border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-slate-200"
              >
                Description <span className="text-red-400">*</span>
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows="6"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the volunteer opportunity... (One item per line)"
                  className="block w-full rounded-lg bg-slate-800/50 px-4 py-2.5 text-base text-white border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm resize-y"
                ></textarea>
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Tip: Write each point on a new line for better formatting
              </p>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200"
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

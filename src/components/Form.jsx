
import React, { useState } from "react"

const Form = () => {
  // State for all form inputs
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    contacts: "",
    gender: "",
    subjects: [],
    resume: null,
    website: "",
    category: "",
    message: "",
  });

  // Handle text, email, URL, and dropdown changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle gender radio buttons
  const handleGenderChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  // Handle checkbox selection
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      subjects: checked
        ? [...prev.subjects, value]
        : prev.subjects.filter((subject) => subject !== value),
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-4 flex flex-col items-center max-w-lg mx-auto p-2 border border-gray-300 rounded-lg shadow-lg"
    >
      <div className="font-bold text-3xl underline mb-2">Form</div>
      <div className="grid gap-2 w-full">
        {/* First Name */}
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          className="border border-gray-500 rounded p-1 w-full"
          required
        />

        {/* Last Name */}
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          className="border border-gray-500 rounded p-1 w-full"
          required
        />

        {/* Email */}
        <label htmlFor="email">Enter Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-500 rounded p-1 w-full"
          required
        />

        {/* Contacts */}
        <label htmlFor="contacts">Contacts:</label>
        <input
          type="tel"
          id="contacts"
          name="contacts"
          value={formData.contacts}
          onChange={handleChange}
          className="border border-gray-500 rounded p-1 w-full"
          required
        />

        {/* Gender Selection */}
        <label className="font-medium">Gender:</label>
        <div className="flex items-center gap-2">
          {["male", "female", "other"].map((gender) => (
            <label key={gender} className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={formData.gender === gender}
                onChange={handleGenderChange}
                className="w-4 h-2"
              />
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </label>
          ))}
        </div>

        {/* Best Subjects */}
        <label className="font-medium">Best Subjects:</label>
        <div className="flex items-center gap-2">
          {["maths", "english", "history"].map((subject) => (
            <label key={subject} className="flex items-center gap-1">
              <input
                type="checkbox"
                name="subjects"
                value={subject}
                checked={formData.subjects.includes(subject)}
                onChange={handleCheckboxChange}
                className="w-4 h-4"
              />
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </label>
          ))}
        </div>

        {/* Upload Resume */}
        <label htmlFor="resume" className="font-medium">
          Upload Resume:
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          onChange={handleFileChange}
          className="border border-gray-500 p-1 rounded w-full"
        />

        {/* Website URL */}
        <label htmlFor="website" className="font-medium">
          Enter URL:
        </label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="border border-gray-500 rounded p-1 w-full"
        />

        {/* Select Dropdown */}
        <label htmlFor="category">Select your choice:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border border-gray-500 rounded p-1 bg-white w-full"
        >
          <option value="">Choose an option</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="groceries">Groceries</option>
          <option value="books">Books</option>
        </select>

        {/* Message Input */}
        <label htmlFor="message" className="font-medium">
          Your Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          placeholder="Type your message here..."
          className="border border-gray-500 rounded p-1 resize-none w-full"
        />

        {/* Buttons */}
        <div className="flex gap-10 items-center justify-center mt-2">
          <button
            type="reset"
            onClick={() =>
              setFormData({
                fname: "",
                lname: "",
                email: "",
                contacts: "",
                gender: "",
                subjects: [],
                resume: null,
                website: "",
                category: "",
                message: "",
              })
            }
            className="border p-1 rounded bg-red-400 text-white font-semibold hover:bg-red-300 transition"
          >
            Reset
          </button>
          <button
            type="submit"
            className="border p-1 rounded bg-green-400 text-white font-semibold hover:bg-green-300 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

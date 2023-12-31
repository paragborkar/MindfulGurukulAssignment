import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    heardAbout: [],
    city: 'Mumbai',
    state: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedHeardAbout = checked
        ? [...formData.heardAbout, value]
        : formData.heardAbout.filter((option) => option !== value);

      setFormData({ ...formData, heardAbout: updatedHeardAbout });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., API call, validation, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            pattern="[A-Za-z ]+"
            title="Alphabets only"
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}"
            title="Alphanumeric only"
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]+"
            title="Number only"
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Gender</label>
          <div className="flex items-center">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-800">Male</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-800">Female</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Others"
                checked={formData.gender === 'Others'}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-800">Others</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            How did you hear about this?
          </label>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="heardAbout"
                value="LinkedIn"
                checked={formData.heardAbout.includes('LinkedIn')}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-800">LinkedIn</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="heardAbout"
                value="Friends"
                checked={formData.heardAbout.includes('Friends')}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-800">Friends</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="heardAbout"
                value="JobPortal"
                checked={formData.heardAbout.includes('JobPortal')}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-800">Job Portal</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="heardAbout"
                value="Others"
                checked={formData.heardAbout.includes('Others')}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-800">Others</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 text-sm font-medium mb-2">
            City
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 text-sm font-medium mb-2">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md font-medium
          hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Signup
          </button>
          <div className="mt-4 text-center">
        <p className="text-gray-600">Already have an account?</p>
        <Link to="/" className="text-blue-500 hover:underline focus:outline-none">
          Login
        </Link>
      </div>
        </form>
      </div>
    );
  };
  
  export default Signup;
  
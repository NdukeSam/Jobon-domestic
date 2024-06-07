import React from "react";
import Navbar from "./Navbar";
import searchBg from "../assets/Search_bg.png";

const PreferenceSearch = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${searchBg})` }}
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full w-full px-4 py-8">
        <form className="flex gap-4 max-w-xl w-full p-4 rounded-lg shadow-md bg-white bg-opacity-75 mb-4">
          <div className="w-1/2">
            <select id="countries" className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-blue-500" style={{ '::placeholder': { color: 'blue' }, outline: 'none' }}>
              <option value="" disabled selected>
                Choose Profession
              </option>
              <option value="SF">Software Engineering</option>
              <option value="NS">Nursing</option>
              <option value="PE">Plumbing</option>
              <option value="ME">Mechanical Engineering</option>
            </select>
          </div>
          <div className="w-1/2">
            <input type="text" placeholder="Enter location" className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-blue-500" style={{ '::placeholder': { color: 'blue' }, outline: 'none' }} />
          </div>
        </form>
        <button type="submit" className="bg-blue-500 text-white rounded-2xl py-2 px-10">
          Search
        </button>
      </div>
    </div>
  );
};

export default PreferenceSearch;

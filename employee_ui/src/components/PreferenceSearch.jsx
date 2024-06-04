import React from "react";
import Navbar from "./Navbar";
import searchBg from "../assets/Search_bg.png";

const PreferenceSearch = () => {
  return (
    <div
      className=" relative h-screen w-full bg-cover bg-center "
      style={{ backgroundImage: `url(${searchBg})` }}
    >
      <Navbar></Navbar>
      <div className="container">
        <div className="flex flex-col h-full sm:flex-row items-center justify-center gap-5">
          
<form class="max-w-sm mx-auto">
  {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose Profession</option>
    <option value="SF">Software Engineering</option>
    <option value="NS">Nursing</option>
    <option value="PE">Plumbing</option>
    <option value="ME">Mechanical Engineering</option>
  </select>

  <label for=""></label>
</form>

          <div>
            <input type="color" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferenceSearch;

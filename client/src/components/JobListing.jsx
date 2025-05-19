import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import { JobCard } from "./JobCard";

export const JobListing = () => {
  const { searchFilter, isSearched, setSearchFilter, jobs } =
    useContext(AppContext);

  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [seletedCategories, setSeletedCategories] = useState([]);
  const [seletedLocations, setSeletedLocations] = useState([]); 

  const[filterJobs,setFilterJobs]=useState(jobs);

  const handleCategoryChange = (category) => {
    setSeletedCategories(
      prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    )
  }
  
  const handleLocationChange = (location) => {
    setSeletedLocations(
      prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev, location]
    )
  }

  useEffect(() => {
    const matchesCategory= job => seletedCategories.length===0 || seletedCategories.includes(job.category);

    const matchesLocation= job => seletedLocations.length===0 || seletedLocations.includes(job.location);

    const matchestitle= job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

    const matchesSearchLocation= job => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilterJobs=jobs.slice().reverse().filter(
      job=> matchesCategory(job) &&
      matchesLocation(job) && 
      matchesSearchLocation(job) &&
      matchestitle(job)
    )

    setFilterJobs(newFilterJobs);
    setCurrentPage(1);



  },[jobs, seletedCategories, seletedLocations, searchFilter.title, searchFilter.location])



  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-9">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-while px-4  ">
        {/* Search Filter from hero components*/}
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== null) && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-400">
                {searchFilter.title && (
                  <span className="inline-flex otems-center gap-2.5 bg-blue-200 px-4 py-1.5 rounded ">
                    {searchFilter.title}
                    <img
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      src={assets.cross_icon}
                      className="cursor-pointer"
                      alt=""
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="ml-2 inline-flex otems-center gap-2.5 bg-red-200 px-4 py-1.5 rounded ">
                    {searchFilter.location}
                    <img
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      src={assets.cross_icon}
                      className="cursor-pointer"
                      alt=""
                    />
                  </span>
                )}
              </div>
            </>
          )}

        <button
          onClick={(e) => setShowFilter((prev) => !prev)}
          className="px-6 py-1.5 rounded border border-gray-400 lg:hidden"
        >
          {showFilter ? "Close" : "Filter"}
        </button>

        {/* category filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search by Categoriees</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li key={index} className="flex items-center gap-3">
                <input
                  className="scale-125"
                  type="checkbox"
                  name={category}
                  id={category}
                  onChange={()=> handleCategoryChange(category)}
                  checked={seletedCategories.includes(category)}
                />
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* category filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4 pt-14">
            Search by Locations
          </h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li key={index} className="flex items-center gap-3">
                <input
                  className="scale-125"
                  type="checkbox"
                  name={location}
                  id={location}
                  onChange={()=> handleLocationChange(location)}
                  checked={seletedLocations.includes(location)}
                />
                <span>{location}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listings */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">
          Latest Jobs
        </h3>
        <p className="mb-8">Get your desired job form top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 ">
          {filterJobs.slice((currentPage - 1) * 6, currentPage * 6)
            .map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
        </div>

        {/* pagination */}
        {filterJobs.length > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-10">
            <a href="#job-list">
              <img
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                src={assets.left_arrow_icon}
                alt="leftarrow"
                className={`${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              />
            </a>

            {Array.from({ length: Math.ceil(filterJobs.length / 6) }).map((_, i) => (
              <a key={i} href="#job-list">
                <button
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-100 text-blue-500"
                      : "text-gray-500"
                  }`}
                >
                  {i + 1}
                </button>
              </a>
            ))}

            <a href="#job-list">
              <img
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, Math.ceil(filterJobs.length / 6))
                  )
                }
                src={assets.right_arrow_icon}
                alt="rightArrow"
                className={`${
                  currentPage === Math.ceil(filterJobs.length / 6)
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import Loading from '../Component/Loading';
import axios from 'axios';
import { Link } from 'react-router-dom';
import bgimg from '../assets/masjid.jpg';

const UmrahPkg = () => {
  const [umrahPackages, setUmrahPackages] = useState([]); // Renamed state for packages
  const [isLoading, setIsLoading] = useState(true); // Renamed loading state
  const [fetchError, setFetchError] = useState(null); // Renamed error state

  useEffect(() => {
    // Fetch data from API when the component mounts
    axios
      .get('/haji.json') // Replace with your API URL
      .then((response) => {
        setUmrahPackages(response.data); // Set fetched data for packages
        setIsLoading(false); // Update loading state
      })
      .catch((err) => {
        setFetchError('Failed to fetch data'); // Set error message
        setIsLoading(false); // Update loading state
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (fetchError) {
    return <div>{fetchError}</div>;
  }

  return (
    <section className="container mx-auto">
      <div
        style={{ backgroundImage: `url(${bgimg})` }}
        className="justify-center flex h-[500px] bg-cover bg-center items-center relative mb-10"
      >
        <div className="p-10 bg-black text-white bg-opacity-60 flex flex-col justify-center items-center absolute w-10/12 mx-auto">
          <h1 className="text-4xl font-bold mb-4">Embark on Your Umrah Journey</h1>
          <p className="text-lg text-center">
            Experience a spiritual voyage with our carefully crafted Umrah packages, designed to make your journey seamless and memorable.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Explore Our Top Umrah Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {umrahPackages.slice(0, 4).map((pkg) => (
          <div key={pkg.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src={pkg.image}
              alt={pkg.location}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{pkg.location}</h3>
              <p className="text-sm text-gray-600">{pkg.description.slice(0, 100)}...</p> {/* Show only a part of the description */}
              <p className="mt-2 font-bold">Price: ₹{pkg.price}</p>

              <div className="mt-4">
                <Link to={`/umrahPackage/${pkg.id}`}>
                  <button className="bg-green-500 hover:bg-red-500 text-white py-2 px-4 rounded-md w-full">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UmrahPkg;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import bgimg from '../assets/masjid.jpg';

const Umrah = () => {
  const [umrahPackages, setUmrahPackages] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    // Replace the URL with your API endpoint
    axios.get('/haji.json')
      .then(response => {
        setUmrahPackages(response.data); // Store fetched data in state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error("There was an error fetching the Umrah packages:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>; // Display loading message while fetching data
  }

  return (
    <section className="container  mx-auto">
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
      
      {/* Added heading */}
      <h2 className="text-3xl font-bold text-center mb-8">Explore Our Top Umrah Packages</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {umrahPackages.map((packageInfo) => (
          <div key={packageInfo.id} className="border p-4 rounded shadow-lg">
            <img src={packageInfo.image} alt="Umrah Package" className="w-full h-80 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-2">{packageInfo.location}</h3>
            <p>{packageInfo.description}</p>
            <p className="text-lg font-bold mt-2">${packageInfo.price}</p>
            <div className="mt-4">
              <Link to={`/umrah-details/${packageInfo.id}`}>
                <button className="bg-green-500 hover:bg-red-700 text-white py-2 px-4 rounded-md w-full">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Umrah;

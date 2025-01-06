import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import { Link, NavLink } from 'react-router-dom';

const HomeUmrahPakg = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API when the component mounts
    axios
      .get('/haji.json') // Replace with your API URL
      .then((response) => {
        setPackages(response.data.slice(0, 4)); // Fetch only the first 4 packages
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="container p-3 mx-auto">
      <div>
        <h2 className="text-3xl font-bold text-center mt-5 mb-8">Explore Our Top Umrah Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="border rounded-lg overflow-hidden shadow-lg">
              <img
                src={pkg.image}
                alt={pkg.location}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{pkg.location}</h3>
                <p className="text-sm text-gray-600">{pkg.description}</p>
                <p className="mt-2 font-bold">Price: ₹{pkg.price}</p>
                <ul className="mt-2 text-sm text-gray-700">
                  {pkg.includes.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">✔</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-col justify-between ">
  <Link to={`/umrah-details/${pkg.id}`}>
    <button className="bg-green-500 hover:bg-red-500 text-white py-2 px-4 rounded-md w-full">
      See Details
    </button>
  </Link>
</div>

              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 justify-center items-center flex">
          <button className="bg-green-500 rounded-full hover:bg-red-500 text-white py-2 px-6">
            <NavLink to="/umrah">See All Packages</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeUmrahPakg;

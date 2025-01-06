import React, { useEffect, useState } from 'react';
import Loading from '../Component/Loading';
import axios from 'axios';
import { Link } from 'react-router-dom';
import bgimg from '../assets/banneroftour.png'

const Alltour = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Fetch data from API when the component mounts
      axios
        .get('/travel.json') // Replace with your API URL
        .then((response) => {
          setPackages(response.data); // Fetch only the first 4 packages
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to fetch data');
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <Loading></Loading>
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  
    return (
      <section className="container mx-auto ">
        <div 
                   style={{ backgroundImage: `url(${bgimg})` }} 
                   className="justify-center flex h-[500px] bg-cover bg-center items-center relative mb-10"
               >
                   <div className="p-10 bg-black text-white bg-opacity-60 flex flex-col justify-center items-center absolute w-10/12 mx-auto ">
                   <h1 className="text-4xl font-bold mb-4 ">Discover Your Dream Vacation Packages</h1>
                       
                   <p className="text-lg text-center">Discover the best holiday deals and unforgettable experiences tailored just for you.</p>
                   </div>
               </div>


        <h2 className="text-3xl font-bold text-center  mb-8">Explore Our Top Holiday Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
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
                <div className="mt-4">
                 <Link to={`/details/${pkg.id}`}> <button className="bg-green-500 hover:bg-red-500 text-white py-2 px-4 rounded-md w-full">
                    See Details
                  </button></Link>
                </div>
              </div>
            </div>
          ))}
  
        
        </div>
      
      </section>
    );
  };
export default Alltour;
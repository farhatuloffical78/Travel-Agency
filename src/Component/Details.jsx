import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from './Loading';
import { FaBackward } from 'react-icons/fa';

const Details = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    // Fetch data based on the package ID
    axios
      .get('/travel.json') // Replace with your API URL
      .then((response) => {
        const foundPackage = response.data.find(pkg => pkg.id === parseInt(id));
        if (foundPackage) {
          setPackageDetails(foundPackage);
        } else {
          setError('Package not found');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, [id]);

  const handleBookNow = () => {
    Swal.fire({
      title: 'Package Booked!',
      text: 'You have successfully booked this holiday package!',
      icon: 'success',
      confirmButtonText: 'OK',
      background: '#fefefe',
      color: '#333',
      confirmButtonColor: '#4CAF50'
    });
  
  };
 
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!packageDetails) {
    return <div>Package not found</div>;
  }

  return (
  <section>
<h1 className="text-4xl font-bold text-center mb-8 mt-28 text-gray-800">Explore the Details of Your Chosen Package</h1>

      <div className="flex justify-center items-center ">
      {/* Page Heading */}
    

      <div className="max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col lg:flex-row p-4">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={packageDetails.image}
            alt={packageDetails.location}
            className="w-full h-64 lg:h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{packageDetails.location}</h2>
          <p className="text-lg text-gray-600 mb-4">{packageDetails.description}</p>
          <p className="text-xl font-semibold text-red-600 mb-4">Price: ₹{packageDetails.price}</p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Includes:</h4>
          <ul className="list-disc ml-6 mb-4">
            {packageDetails.includes.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Services:</h4>
          <ul className="list-disc ml-6 mb-4">
            {packageDetails.services.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>

         <div className='flex justify-center items-center gap-2'>
             {/* Book Now Button */}
          <button
            onClick={handleBookNow}
            className="bg-red-500 font-semibold text-white py-2 px-6 rounded-md w-full mt-6 transition"
          >
            Book Now
          </button>

          <button className=' mt-6  '> <Link to='/allpackage'> <FaBackward /></Link> </button>
         </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Details;

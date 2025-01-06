import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from '../Component/Loading';

const UmrahPkgDetails = () => {
  const { id } = useParams(); // Extract ID from URL
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('/haji.json') // Replace with your API URL
      .then((response) => {
        const selectedPackage = response.data.find((pkg) => pkg.id === id);
        if (selectedPackage) {
          setPackageDetails(selectedPackage);
        } else {
          setError('Package not found');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch package details');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  const handleBooking = () => {
    Swal.fire({
      icon: 'success',
      title: 'Booking Confirmed!',
      text: `You have successfully booked the ${packageDetails.location} package.`,
      confirmButtonText: 'OK',
    });
  };

  return (
    <div className="container mx-auto mt-10 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={packageDetails.image}
            alt={packageDetails.location}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{packageDetails.location}</h1>
          <p className="text-gray-700 mb-4">{packageDetails.description}</p>
          <p className="text-lg font-bold mb-2">Price: ₹{packageDetails.price}</p>

          {/* Includes Section */}
          <h3 className="text-lg font-semibold mb-2">Includes:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {packageDetails.includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Services Section */}
          <h3 className="text-lg font-semibold mb-2">Services:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {packageDetails.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>

          <button
            onClick={handleBooking}
            className="bg-green-500 hover:bg-red-500 text-white py-2 px-4 rounded-md w-full"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UmrahPkgDetails;

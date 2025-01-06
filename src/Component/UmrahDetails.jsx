import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2
import Loading from './Loading';

const UmrahDetails = () => {
  const { id } = useParams(); // Get the package ID from the URL
  const [packageInfo, setPackageInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the details of the selected Umrah package using the ID
    axios.get(`/haji.json`) // Assuming you are fetching from a JSON file or replace with actual API URL
      .then(response => {
        const selectedPackage = response.data.find(pkg => pkg.id === parseInt(id)); // Find the selected package by ID
        setPackageInfo(selectedPackage); // Set the package details
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        setError("Failed to fetch package details.");
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [id]);

  const handleBookNow = () => {
    Swal.fire({
      title: 'Booking Confirmation',
      text: 'Are you sure you want to book this Umrah package?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Book Now!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Booked!',
          'Your Umrah package has been successfully booked.',
          'success'
        );
      }
    });
  };

  if (loading) {
    return <div className="text-center py-4"><Loading /></div>;
  }

  if (error) {
    return <div className="text-center py-4">{error}</div>;
  }

  if (!packageInfo) {
    return <div className="text-center py-4">Package not found.</div>;
  }

  return (
    <section className="container mx-auto py-8 mt-20">
      <div className="flex flex-col md:flex-row border p-6 rounded-xl shadow-xl bg-white max-w-4xl mx-auto">
        <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
          <img src={packageInfo.image} alt="Umrah Package" className="w-full  object-cover rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-semibold text-gray-800">{packageInfo.location}</h2>
          <p className="mt-4 text-lg text-gray-600">{packageInfo.description}</p>
          <p className="mt-4 text-xl font-bold text-green-600">Price: ₹{packageInfo.price}</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mt-6">Includes:</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            {packageInfo.includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <h3 className="text-2xl font-semibold text-gray-800 mt-6">Services:</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            {packageInfo.services.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Book Now Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleBookNow}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmrahDetails;

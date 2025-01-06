import React from "react";
import { FaPlane, FaUsers, FaBuilding, FaGlobe } from "react-icons/fa"; // React Icons
import bgimg from "../assets/state.jpg";

const StatsSection = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16 mt-10 mb-10"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      {/* Black smoky overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content Section */}
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
        {/* Flight Booking */}
        <div>
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full">
            <FaPlane className="text-black w-8 h-8" />
          </div>
          <h3 className="text-3xl font-bold">1,55,386</h3>
          <p className="text-lg">Flight Booking</p>
        </div>
        {/* Total Users */}
        <div>
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full">
            <FaUsers className="text-black w-8 h-8" />
          </div>
          <h3 className="text-3xl font-bold">200K</h3>
          <p className="text-lg">Total Users</p>
        </div>
        {/* Hotel Booking */}
        <div>
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full">
            <FaBuilding className="text-black w-8 h-8" />
          </div>
          <h3 className="text-3xl font-bold">355K</h3>
          <p className="text-lg">Hotel Booking</p>
        </div>
        {/* Amazing Tour */}
        <div>
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full">
            <FaGlobe className="text-black w-8 h-8" />
          </div>
          <h3 className="text-3xl font-bold">1,500</h3>
          <p className="text-lg">Amazing Tour</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

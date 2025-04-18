import React from "react";

const HoursOfOperation = () => {
  return (
    <div className=" text-white max-w-sm mx-auto p-6 rounded-lg shadow-md text-center border">
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
        We're Open
      </h2>

      {/* Weekdays */}
      <div className="mb-4">
        <h3 className="font-bold text-sm tracking-wide">MON – FRI</h3>
        <p className="text-sm">10:00am – 1:00pm</p>
        <p className="text-sm">4:00pm – 10:30pm</p>
      </div>

      <hr className="border-t border-yellow-600 my-4" />

      {/* Saturday */}
      <div className="mb-4">
        <h3 className="font-bold text-sm tracking-wide">SAT</h3>
        <p className="text-sm">3:00pm – 10:30pm</p>
      </div>

      <hr className="border-t border-yellow-600 my-4" />

      {/* Sunday */}
      <div className="mb-6">
        <h3 className="font-bold text-sm tracking-wide">SUN</h3>
        <p className="text-sm">We are closed</p>
      </div>
    </div>
  );
};

export default HoursOfOperation;

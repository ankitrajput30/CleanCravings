import React, { useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="flex items-center gap-1 justify-center">
      {[...Array(5)].map((_, index) => {
        const current = (index + 1) * 1.0;
        return (
          <span
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHover(current)}
            onMouseLeave={() => setHover(null)}
            className="cursor-pointer text-xl"
          >
            {hover ? (
              hover >= current ? (
                <FaStar className="text-yellow-400" />
              ) : (
                <FaRegStar className="text-yellow-400" />
              )
            ) : rating >= current ? (
              <FaStar className="text-yellow-400" />
            ) : (
              <FaRegStar className="text-yellow-400" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;

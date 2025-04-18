import React from "react";
import StarRating from "./StarRating";

const FeedbackSection = () => {
  const [rating, setRating] = React.useState(0);

  const getFeedbackMessage = (rating) => {
    switch (rating) {
      case 1:
        return "Not Happy 😞";
      case 2:
        return "Could be better 😕";
      case 3:
        return "Okay 🙂";
      case 4:
        return "Good 😄";
      case 5:
        return "Excellent! 🤩";
      default:
        return "Please rate us!";
    }
  };

  return (
    <div className="text-white max-w-md mx-auto p-6 rounded-lg shadow-md space-y-10 text-center border">
      {/* Drop Us a Line Section */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          Drop Us a Line
        </h2>
        <p className="text-sm mb-4">
          Don’t be shy. Let us know if you have any Feedback for us!
        </p>
      </div>

      {/* Newsletter / Feedback Form */}
      <div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 rounded bg-black text-white text-sm placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Message"
            className="w-full p-2 rounded bg-black text-white text-sm placeholder-gray-400"
          />

          <div className="text-white">
            <StarRating rating={rating} setRating={setRating} />
            <p className="mt-2 text-sm text-gray-300">
              {getFeedbackMessage(rating)}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white uppercase text-xs tracking-wider px-4 py-2 rounded hover:bg-yellow-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackSection;

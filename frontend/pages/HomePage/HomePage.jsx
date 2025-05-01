import React from "react";
import { useNavigate } from "react-router";
function HomePage() {
  const navigate = useNavigate();
  const handleAddMember = () => {
    navigate("/add");
  };
  const handleViewMembers = () => {
    navigate("/members");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] ">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Hash It Out
      </h1>
      <h3 className="text-2xl text-center text-grey mb-8">
        Welcome to the Team Management App
      </h3>
      <div className="flex space-x-4">
        <button
          onClick={handleAddMember}
          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:scale-105 transform transition duration-300"
        >
          Add Member
        </button>
        <button
          onClick={handleViewMembers}
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 transform transition duration-300"
        >
          View Members
        </button>
      </div>
    </div>
  );
}

export default HomePage;

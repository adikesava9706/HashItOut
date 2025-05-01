import React from "react";
import { useNavigate } from "react-router-dom";

function MemberCard({ member = {} }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/members/${member.id || "unknown"}`, { state: { member } });
  };

  return (
    <div className="p-4 lg:w-1/4 md:w-1/2 border rounded-2xl">
      <div className="h-full flex flex-col items-center text-center">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
          src={`data:${member.file.contentType};base64,${member.file.data}`} // Display Base64 image
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-white">
            {member.name || "N/A"}
          </h2>
          <h3 className="text-gray-500 mb-3">{member.email || "N/A"}</h3>
          <button
            onClick={handleViewDetails}
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:scale-105 transform transition duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;

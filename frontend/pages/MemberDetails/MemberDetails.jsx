import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await fetch(`http://localhost:3000/members/${id}`);
        const data = await response.json();
        setMember(data);
      } catch (error) {
        console.error("Error fetching member:", error);
      }
    };

    fetchMember();
  }, [id]);

  if (!member) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen text-white flex flex-col items-center py-10">
      <div className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Display Member Image */}
        <div className="mb-6">
          <img
            src={`data:${member.file.contentType};base64,${member.file.data}`}
            alt={member.name || "Member"}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Display Member Details */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{member.name || "N/A"}</h1>
          <p className="text-gray-400 mb-2">
            <strong>Email:</strong> {member.email || "N/A"}
          </p>
          <p className="text-gray-400 mb-2">
            <strong>Hobbies:</strong> {member.hobbies || "N/A"}
          </p>
          <p className="text-gray-400 mb-4">
            <strong>Message:</strong> {member.message || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MemberDetails;

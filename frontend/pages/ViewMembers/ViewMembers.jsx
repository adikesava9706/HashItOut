import React, { useEffect, useState } from "react";
import MemberCard from "../../components/MemberCard/MemberCard";

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch members from the backend
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:3000/members");
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-white">
              Hash It Out
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              This is my team. I am proud of them. They are the best team in the
              university.
            </p>
          </div>
          <div className="flex flex-wrap justify-center -m-4 gap-4">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ViewMembers;

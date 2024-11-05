import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ProfileCard = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const user = users.find((user) => user.id === id);

  if (!user) return <div>User not found</div>;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar className="w-full md:w-1/4 lg:w-1/5 bg-white" />
      <div className="" style={{margin:"0 20% 0 20%"}}>
        <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-24 bg-indigo-600">
            <div className="absolute -bottom-12 left-6 w-24 h-24 bg-gray-200 rounded-full border-4 border-white"></div>
            <div className="absolute top-3 right-6 h-10 w-16 bg-orange-400 rounded-md"></div>
            <div className="absolute top-5 right-12 h-10 w-10 bg-yellow-300 rounded-md"></div>
          </div>

          <div className="pt-16 pb-6 px-6">
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">User</p>

            <div className="mt-4 space-y-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-orange-500 mr-2" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-orange-500 mr-2" />
                <span>{user.contact}</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-2" />
                <span>{user.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard; // Ensure this line exists

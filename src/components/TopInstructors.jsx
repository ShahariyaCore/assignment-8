"use client";
import React from "react";

const TopInstructors = () => {
  const instructors = [
    {
      name: "Dr. Sarah Khan",
      role: "Data Science Expert",
      image: "/teacher/instructor1.jpg", // replace with your image
    },
    {
      name: "John Doe",
      role: "Full-Stack Developer",
      image: "/teacher/instructor2.jpg",
    },
    {
      name: "Emily Smith",
      role: "UI/UX Designer",
      image: "/teacher/instructor3.jpg",
    },
    {
      name: "Michael Lee",
      role: "AI Researcher",
      image: "/teacher/instructor4.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 drop-shadow-lg">
          🏆 Top Instructors
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Instructor Image */}
              <div className="flex justify-center mt-6">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-purple-300 group-hover:border-pink-400 transition"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition">
                  {instructor.name}
                </h3>
                <p className="text-gray-600 mb-4">{instructor.role}</p>

                {/* Call to Action */}
                <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform font-semibold">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;

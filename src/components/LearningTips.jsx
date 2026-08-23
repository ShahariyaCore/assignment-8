"use client";
import React from "react";

const LearningTips = () => {
  const tips = [
    {
      title: "Active Recall",
      description: "Test yourself instead of just rereading notes.",
      image: "/tips/recall.jpg", 
    },
    {
      title: "Pomodoro Technique",
      description: "Study in 25-minute focused sessions with 5-minute breaks.",
      image: "/tips/pomodoro.jpg",
    },
    {
      title: "Prioritize Tasks",
      description: "Tackle the most important tasks first each day.",
      image: "/tips/prioritize.jpg",
    },
    {
      title: "Avoid Multitasking",
      description: "Focus on one subject at a time for deeper learning.",
      image: "/tips/focus.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-14 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 drop-shadow-lg">
          📌 Learning Tips
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition">
                  {tip.title}
                </h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTips;

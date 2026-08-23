"use client";
import React, { useEffect, useState } from "react";

const TrendingCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.slice(0, 3)); // pick top 3 trending
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading trending courses...</p>;
  }

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-600">
        🔥 Trending Courses
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-lg p-6">
            <img src={course.image} alt={course.title} className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-600">{course.instructor}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCourses;

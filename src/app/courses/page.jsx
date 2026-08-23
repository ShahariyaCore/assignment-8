"use client";
import React, { useEffect, useState } from "react";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loadError, setLoadError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json") // make sure your data.json is inside public/
      .then((res) => {
        if (!res.ok) throw new Error("Unable to load courses");
        return res.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch(() => {
        setLoadError(true);
        setLoading(false);
      });
  }, []);

  // Filter courses by title
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 drop-shadow-lg">
        📚 All Courses
      </h2>

      {/* Spinner Loader */}
      {loading && (
        <div className="flex justify-center mb-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-600"></div>
        </div>
      )}

      {/* Search Input */}
      {!loading && (
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search courses by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      )}

      {loadError && (
        <p className="text-center text-red-600">Unable to load courses.</p>
      )}

      {/* Courses Grid */}
      {!loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-pink-600 transition">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-2">👨‍🏫 {course.instructor}</p>
                <p className="text-yellow-500 font-semibold mb-2">⭐ {course.rating}</p>
                <p className="text-gray-500 mb-4">
                  {course.duration} • {course.level}
                </p>
                <p className="text-gray-700 mb-6">{course.description}</p>

                {/* Static Curriculum List */}
                <h4 className="text-lg font-bold mb-2">📖 Course Curriculum</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Introduction & Setup</li>
                  <li>Core Concepts</li>
                  <li>Hands‑on Projects</li>
                  <li>Advanced Techniques</li>
                  <li>Final Assessment</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CoursesPage;

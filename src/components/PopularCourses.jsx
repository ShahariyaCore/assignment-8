const PopularCourses = async () => {
  const response = await fetch("https://assignment-8-nine-xi.vercel.app/data.json");
  const data = await response.json();
  const popularCourses = data.slice(0, 3);

  return (
    <div className="popular-courses w-max mx-auto py-16">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 drop-shadow-lg">
        🔥 Popular Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {popularCourses.map((course) => (
          <div
            key={course.id}
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 w-[350px]"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-pink-600 transition">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-3">{course.description}</p>
              <p className="text-yellow-500 font-semibold mb-4">
                ⭐ Rating: {course.rating}
              </p>

              <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform font-semibold">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
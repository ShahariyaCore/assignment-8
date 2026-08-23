import { notFound } from "next/navigation";
import courses from "../../../../public/data.json";

export default async function CourseDetails({ params }) {
  const { id } = await params;
  const course = courses.find((item) => item.id === Number(id));

  if (!course) notFound();

  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <h1 className="text-5xl font-bold mb-6 text-purple-600">{course.title}</h1>
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-xl shadow-lg mb-6"
      />
      <p className="text-gray-700 mb-4">{course.description}</p>
      <p className="text-gray-600 mb-2">👨‍🏫 {course.instructor}</p>
      <p className="text-yellow-500 font-semibold mb-2">⭐ {course.rating}</p>
      <p className="text-gray-500 mb-6">{course.duration} • {course.level}</p>

      <h2 className="text-3xl font-bold mb-4">📖 Course Curriculum</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Introduction & Setup</li>
        <li>Core Concepts</li>
        <li>Hands-on Projects</li>
        <li>Advanced Techniques</li>
        <li>Final Assessment</li>
      </ul>
    </section>
  );
}
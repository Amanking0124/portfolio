export default function Skills() {
  const skillList = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Git & GitHub",
    "Arduino",
    "IoT",
    "Electronics",
  ];

  return (
    <section className="p-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillList.map((skill) => (
            <li key={skill} className="bg-white dark:bg-gray-700 p-3 rounded shadow text-center">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

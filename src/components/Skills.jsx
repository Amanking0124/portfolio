export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS", "Responsive Design"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Database Design"],
    },
    {
      category: "IoT & Hardware",
      skills: ["Arduino", "Sensors", "MQTT", "Embedded Systems", "Circuit Design"],
    },
    {
      category: "Tools & Others",
      skills: ["Git & GitHub", "VS Code", "npm", "Vite", "Linux"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-500">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

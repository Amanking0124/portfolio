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
    <section className="relative py-16 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      {/* Animated background blobs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 blob"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 blob" style={{ animationDelay: "2s" }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-300 dark:hover:border-purple-600">
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-medium hover:shadow-md transition-shadow"
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

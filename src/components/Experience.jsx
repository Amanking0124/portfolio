export default function Experience() {
  const experiences = [
    {
      title: "IoT Developer",
      company: "Personal Projects",
      duration: "2023 - Present",
      description: "Developed IoT solutions using Arduino, sensors, and web technologies. Integrated hardware with React applications.",
    },
    {
      title: "Web Developer",
      company: "Freelance",
      duration: "2022 - Present",
      description: "Built responsive web applications using React, Tailwind CSS, and Node.js for various clients.",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 blob" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300 dark:bg-green-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 blob" style={{ animationDelay: "3s" }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-300 dark:hover:border-blue-600 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">{exp.duration}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

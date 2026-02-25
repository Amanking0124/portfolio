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
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-blue-500 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">{exp.duration}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

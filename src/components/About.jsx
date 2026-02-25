export default function About() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10 blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10 blob" style={{ animationDelay: "2s" }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              I'm a passionate developer and IoT enthusiast with a focus on creating innovative solutions
              that bridge web development and hardware integration. My journey in tech has been driven by
              curiosity and a desire to build things that matter.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              With expertise in modern web technologies like React and Node.js, combined with hands-on
              experience in Arduino and IoT projects, I approach problems with a full-stack perspective.
              I believe in writing clean, maintainable code and creating user-centric solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              When I'm not coding, you'll find me experimenting with new technologies, contributing to
              open-source projects, or working on innovative hardware-software integrations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 dark:from-blue-700 dark:via-blue-800 dark:to-purple-800 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Facts</h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start">
                <span className="text-blue-200 mr-3 mt-1 text-xl">→</span>
                <span><strong>Focus:</strong> Full-Stack Development & IoT Solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3 mt-1 text-xl">→</span>
                <span><strong>Location:</strong> India</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3 mt-1 text-xl">→</span>
                <span><strong>Experience:</strong> 2+ Years in Web & IoT Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-3 mt-1 text-xl">→</span>
                <span><strong>Status:</strong> Open to freelance & full-time opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

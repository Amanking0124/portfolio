export default function About() {
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I'm a passionate developer and IoT enthusiast with a focus on creating innovative solutions
              that bridge web development and hardware integration. My journey in tech has been driven by
              curiosity and a desire to build things that matter.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              With expertise in modern web technologies like React and Node.js, combined with hands-on
              experience in Arduino and IoT projects, I approach problems with a full-stack perspective.
              I believe in writing clean, maintainable code and creating user-centric solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me experimenting with new technologies, contributing to
              open-source projects, or working on innovative hardware-software integrations.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Quick Facts</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">→</span>
                <span><strong>Focus:</strong> Full-Stack Development & IoT Solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">→</span>
                <span><strong>Location:</strong> India</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">→</span>
                <span><strong>Experience:</strong> 2+ Years in Web & IoT Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">→</span>
                <span><strong>Status:</strong> Open to freelance & full-time opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

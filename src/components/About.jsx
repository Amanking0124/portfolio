export default function About() {
  return (
    <section id="about" className="p-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm a passionate developer and IoT/Arduino enthusiast. I build web
          applications with React and Tailwind CSS, and integrate them with
          hardware projects using Arduino, sensors, and MQTT. I'm always eager to
          turn ideas into reality and explore new technologies.
        </p>
        <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          <li className="bg-white dark:bg-gray-700 p-2 rounded shadow text-center">React</li>
          <li className="bg-white dark:bg-gray-700 p-2 rounded shadow text-center">JavaScript</li>
          <li className="bg-white dark:bg-gray-700 p-2 rounded shadow text-center">Tailwind CSS</li>
          <li className="bg-white dark:bg-gray-700 p-2 rounded shadow text-center">Node.js</li>
          <li className="bg-white dark:bg-gray-700 p-2 rounded shadow text-center">Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
}

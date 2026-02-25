import { FaAward } from "react-icons/fa";

export default function Certifications() {
  const certs = [
    {
      title: "React Fundamentals",
      issuer: "Udemy",
      date: "2024",
      credentialUrl: "https://www.linkedin.com/in/amandeep-singh-ab56ba291/",
    },
    {
      title: "Arduino & IoT Basics",
      issuer: "Coursera",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/amandeep-singh-ab56ba291/",
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/amandeep-singh-ab56ba291/",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Licenses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, idx) => (
            <a
              key={idx}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <FaAward className="text-blue-500 text-2xl mt-1 flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-blue-500 text-sm font-medium">{cert.issuer}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{cert.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-8 text-sm">
          View more certifications on{" "}
          <a
            href="https://www.linkedin.com/in/amandeep-singh-ab56ba291/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}

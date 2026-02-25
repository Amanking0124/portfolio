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
    <section className="relative py-16 bg-gradient-to-br from-white via-orange-50 to-red-50 dark:from-gray-900 dark:via-orange-900 dark:to-red-900">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-300 dark:bg-orange-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 blob" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-300 dark:bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 blob" style={{ animationDelay: "3s" }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Certifications & Licenses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, idx) => (
            <a
              key={idx}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-300 dark:hover:border-orange-600 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-3xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaAward />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{cert.title}</h3>
                  <p className="text-orange-600 dark:text-orange-400 text-sm font-medium mt-1">{cert.issuer}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{cert.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-10 text-sm">
          View more certifications on{" "}
          <a
            href="https://www.linkedin.com/in/amandeep-singh-ab56ba291/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 dark:text-orange-400 hover:underline font-semibold"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}

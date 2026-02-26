import { useEffect, useState } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // used for card hover animations

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Amanking0124/repos")
      .then((res) => {
        // sort by star count descending and keep only the top 3
        const sorted = res.data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(sorted.slice(0, 3));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50 dark:from-gray-900 dark:via-teal-900 dark:to-gray-900">
      {/* Decorative animated elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-300 dark:bg-teal-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 blob" style={{ animationDelay: "2s" }}></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Projects Made</h2>
        <div className="grid md:grid-cols-3 gap-6 p-10 max-w-7xl mx-auto">
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="group bg-white dark:bg-gray-800 p-6 shadow-lg rounded-xl transition-all duration-300 border border-transparent hover:border-teal-300 dark:hover:border-teal-600 hover:shadow-2xl"
            >
              {/* use repo.owner.avatar_url as a thumbnail if available */}
              {repo.owner && repo.owner.avatar_url && (
                <img
                  src={repo.owner.avatar_url}
                  alt="thumbnail"
                  className="w-full h-32 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{repo.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 h-12 overflow-hidden text-sm mb-4 leading-relaxed">{repo.description}</p>
              <div className="mt-4 flex flex-col space-y-2">
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    ⭐ {repo.stargazers_count}
                  </span>
                </div>
                <div className="flex justify-between">
                  <a
                    href={repo.homepage || repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 dark:text-teal-400 font-semibold hover:underline text-sm"
                  >
                    View
                  </a>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {repos.length > 0 && (
          <div className="text-center mt-8">
            <a
              href="https://github.com/Amanking0124?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition"
            >
              View All Projects
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

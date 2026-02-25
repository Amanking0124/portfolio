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
        setRepos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-6 p-10">
      {repos.map((repo) => (
        <motion.div
          key={repo.id}
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-700 p-5 shadow-lg rounded-xl transition-transform"
        >
          <h2 className="text-xl font-bold dark:text-white">{repo.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 h-12 overflow-hidden">{repo.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <a
              href={repo.html_url}
              target="_blank"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              View Repo
            </a>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ⭐ {repo.stargazers_count}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

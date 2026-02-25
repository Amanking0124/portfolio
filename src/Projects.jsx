import { useEffect, useState } from "react";
import axios from "axios";

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
        <div key={repo.id} className="bg-white p-5 shadow-lg rounded-xl">
          <h2 className="text-xl font-bold">{repo.name}</h2>
          <p className="text-gray-600">{repo.description}</p>
          <a
            href={repo.html_url}
            target="_blank"
            className="text-blue-500"
          >
            View Repo
          </a>
        </div>
      ))}
    </div>
  );
}

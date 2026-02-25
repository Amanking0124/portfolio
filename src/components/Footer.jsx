import SocialButtons from "./SocialButtons";

export default function Footer() {
  return (
    <footer className="relative py-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-gray-300 dark:text-gray-400">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 pb-6 border-b border-gray-700">
          <div>
            <h3 className="text-white font-semibold text-lg">Amandeep Singh</h3>
            <p className="text-sm text-gray-400">IoT Developer | Full Stack Engineer</p>
          </div>
          <SocialButtons className="justify-center mt-4 md:mt-0" />
        </div>
        <div className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Amandeep Singh. All rights reserved.</p>
          <p className="mt-2">Designed & built with React, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}

import SocialButtons from "./SocialButtons";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-600 dark:text-gray-300">
      <div className="mb-2">
        <SocialButtons className="justify-center" />
      </div>
      <p>© {new Date().getFullYear()} Amandeep Singh. All rights reserved.</p>
    </footer>
  );
}

export default function ResumePage() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <p className="mb-6">
        You can download my resume or view it inline below.
      </p>
      <a
        href="/Amandeep_Singh_Portfolio.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Open resume in new tab
      </a>
      <div className="mt-6">
        <iframe
          src="/Amandeep_Singh_Portfolio.pdf"
          className="w-full h-[800px]"
          title="Resume"
        />
      </div>
    </div>
  );
}

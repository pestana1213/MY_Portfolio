import Link from "next/link";

const DownloadCV = () => {
  return (
    <div className="flex justify-center">
      <Link
        href="/JoaoNogueiraCV.pdf"
        download="JoaoNogueiraCV.pdf"
        className="inline-flex items-center px-6 py-3 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg 
          className="w-5 h-5 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download CV
      </Link>
    </div>
  );
};

export default DownloadCV;
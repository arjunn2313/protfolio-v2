import { FaDownload } from "react-icons/fa";

export default function ResumeDownload() {
  const handleDownload = () => {
    const pdfUrl = "/ARJUN-FULLSTACK DEVELOPER.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ARJUN-FULLSTACK DEVELOPER.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button  onClick={handleDownload} className="border border-white hover:border-red-500 hover:bg-red-500 hover:text-white px-5 py-2 rounded-sm">
      Download CV
    </button>
  );
}

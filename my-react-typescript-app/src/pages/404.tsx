import { Link } from "react-router";
import { TriangleAlert } from "lucide-react";

const pageNotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-gray-800 mb-4">404</h1>

        <div className="text-6xl mb-4 flex items-center justify-center">
          <TriangleAlert className="w-16 h-16 text-gray-700" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>

        <p className="text-gray-500 mb-6">Oops! Halaman yang kamu cari tidak ditemukan atau sudah dipindahkan.</p>

        <div className="flex justify-center gap-4">
          <Link to="/" className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Back Home
          </Link>

          <button onClick={() => window.history.back()} className="px-5 py-2 cursor-pointer border border-gray-300 rounded-lg hover:bg-gray-200 transition">
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default pageNotFound;

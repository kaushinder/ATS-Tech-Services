import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-9xl font-bold text-blue-600 font-heading">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Go Home
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

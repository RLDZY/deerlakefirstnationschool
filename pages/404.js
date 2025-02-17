import Link from "next/link"

export default function Custom404() {
    return (
        <>
         <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-600 mt-4">Oops! The page you are looking for doesn't exist or has been moved.</p>
        <Link href="/">
          <p className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300">
            Go back to Home
          </p>
        </Link>
      </div>
    </div>
        </>
    )
  }


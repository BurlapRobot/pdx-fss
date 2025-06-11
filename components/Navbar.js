import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex space-x-6">
        <Link href="/" className="hover:text-gray-300">
          Welcome
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/mission" className="hover:text-gray-300">
          Mission
        </Link>
        <Link href="/stats" className="hover:text-gray-300">
          Stats
        </Link>
        <Link href="/get-involved" className="hover:text-gray-300">
          Get Involved
        </Link>
      </div>
    </nav>
  );
} 
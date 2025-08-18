import Link from "next/link";

const Footer = () => (
  <footer className="bg-neutral_0 text-primary_50 text-xs py-6 px-4 mt-8">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
      <div>
        <span className="font-bold">Families for Safe Streets Portland</span>
        <div className="flex space-x-2 mt-1">
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </div>
      <div className="mt-2 md:mt-0 flex flex-col md:flex-row md:space-x-6">
        <div>
          <div><Link href="/about">About Us</Link></div>
          <div className="text-neutral_100">Who We Are</div>
          <div className="text-neutral_100">Leadership</div>
          <div><Link href="/contact-us">Contact Us</Link></div>
        </div>
      </div>
    </div>
    <div className="text-neutral_100 mt-2">© 2025 Families for Safe Streets, Portland</div>
  </footer>
);

export default Footer;
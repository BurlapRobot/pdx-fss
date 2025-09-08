import { Libre_Franklin } from "next/font/google";
import AlertBar from "./AlertBar";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import NewsletterSignup from "./NewsletterSignup";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
});

export default function Layout({ children, navbar, alertBar }) {
  return (
    <div
      className={`min-h-screen flex flex-col bg-neutral_0 ${libreFranklin.className}`}
    >
      <AlertBar {...alertBar} />
      <Navbar {...navbar} />
      {children}
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

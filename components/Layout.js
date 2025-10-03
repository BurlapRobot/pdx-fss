import { Libre_Franklin } from "next/font/google";
import AlertBar from "./AlertBar";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import NewsletterSignup from "./NewsletterSignup";
import useComponentPosition from "../hooks/useComponentPosition";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
});

export default function Layout({ children, navbar, alertBar }) {
  const { componentPosition, componentRef } = useComponentPosition();

  return (
    <div
      className={`min-h-screen flex flex-col bg-neutral_0 ${libreFranklin.className}`}
    >
      <div ref={componentRef}>
        <AlertBar {...alertBar} />
        <Navbar {...navbar} componentPosition={componentPosition} />
      </div>
      <div className="default-link">{children}</div>
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

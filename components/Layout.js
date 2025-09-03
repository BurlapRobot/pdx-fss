import AlertBar from "./AlertBar";
import NewsletterSignup from "./NewsletterSignup";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children, navbar, alertBar }) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral_0">
      <AlertBar {...alertBar} />
      <Navbar {...navbar} />
      {children}
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

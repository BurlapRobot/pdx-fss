import fs from "fs";
import matter from "gray-matter";
import path from "path";
import AlertBar from "../components/AlertBar";
import ContentGrid from "../components/ContentGrid";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import NewsletterSignup from "../components/NewsletterSignup";
import StatsSection from "../components/StatsSection";

export default function Home({ navbar, heroSection, contentGrid }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AlertBar />
      <Navbar {...navbar} />
      <HeroSection {...heroSection} />
      <StatsSection />
      <ContentGrid {...contentGrid} />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const heroPath = path.join(process.cwd(), "content", "hero-section.md");
  const heroContent = fs.readFileSync(heroPath, "utf8");
  const { data } = matter(heroContent);

  const navPath = path.join(process.cwd(), "content", "navbar.md");
  const navContent = fs.readFileSync(navPath, "utf8");
  const { data: navData } = matter(navContent);

  const contentGridPath = path.join(process.cwd(), "content", "content-grid.md");
  const contentGridContent = fs.readFileSync(contentGridPath, "utf8");
  const { data: contentGridData } = matter(contentGridContent);


  return {
    props: {
      heroSection: data,
      navbar: navData,
      contentGrid: contentGridData,
    },
  };
}

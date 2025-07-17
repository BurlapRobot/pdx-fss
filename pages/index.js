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

export default function Home({ navbar, heroSection, statsSection, contentGrid }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AlertBar />
      <Navbar {...navbar} />
      <HeroSection {...heroSection} />
      <StatsSection {...statsSection} />
      <ContentGrid {...contentGrid} />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const heroPath = path.join(process.cwd(), "content", "hero-section.md");
  const heroContent = fs.readFileSync(heroPath, "utf8");
  const { data: heroData } = matter(heroContent);

  const navPath = path.join(process.cwd(), "content", "navbar.md");
  const navContent = fs.readFileSync(navPath, "utf8");
  const { data: navData } = matter(navContent);

  const statsPath = path.join(process.cwd(), "content", "stats-section.md");
  const statsContent = fs.readFileSync(statsPath, "utf8");
  const { data: statsData } = matter(statsContent);

  const contentGridPath = path.join(process.cwd(), "content", "content-grid.md");
  const contentGridContent = fs.readFileSync(contentGridPath, "utf8");
  const { data: contentGridData } = matter(contentGridContent);


  return {
    props: {
      heroSection: heroData,
      navbar: navData,
      statsSection: statsData,
      contentGrid: contentGridData,
    },
  };
}

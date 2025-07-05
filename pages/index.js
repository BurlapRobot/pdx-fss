import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import AlertBar from '../components/AlertBar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ContentGrid from '../components/ContentGrid';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

export default function Home({ heroSection }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AlertBar />
      <Navbar />
      <HeroSection {...heroSection} />
      <StatsSection />
      <ContentGrid />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const heroPath = path.join(process.cwd(), 'content', 'hero-section.md');
  const heroContent = fs.readFileSync(heroPath, 'utf8');
  const { data } = matter(heroContent);

  return {
    props: {
      heroSection: data,
    },
  };
}


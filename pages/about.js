import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import AlertBar from '../components/AlertBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About({ content }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AlertBar />
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <div className="prose prose-lg mx-auto">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'about.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContent);

  return {
    props: {
      content,
    },
  };
}


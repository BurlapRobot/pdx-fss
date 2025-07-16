import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import AlertBar from '../components/AlertBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GetInvolved({ title, intro, sections }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AlertBar />
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="max-w-4xl mx-auto py-8 px-4 space-y-12">
          <section>
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div className="mb-6 text-lg prose prose-lg">
              <ReactMarkdown>{intro}</ReactMarkdown>
            </div>
          </section>
          {sections && sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-semibold mb-2">{section.sectionTitle}</h2>
              <div className="prose prose-lg">
                <ReactMarkdown>{section.sectionBody}</ReactMarkdown>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'get-involved.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);

  return {
    props: {
      title: data.title || '',
      intro: data.intro || '',
      sections: data.sections || [],
    },
  };
}


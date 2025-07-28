import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import AlertBar from "../components/AlertBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function EventCalendar({ title, body }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AlertBar />
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="max-w-4xl mx-auto py-8 px-4 space-y-12">
          <section>
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div className="mb-6 text-lg prose prose-lg">
              <ReactMarkdown>{body}</ReactMarkdown>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const eventCalendarPath = path.join(process.cwd(), 'content', 'calendar.md');
  const eventCalendarContent = fs.readFileSync(eventCalendarPath, 'utf8');
  const { data } = matter(eventCalendarContent);

  return {
    props: {
      title: data.title,
      body: data.body,
    },
  };
}
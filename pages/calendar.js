import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export default function EventCalendar({ title, body }) {
  return (
    <div className="min-h-screen flex flex-col">
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
    </div>
  )
}

export async function getStaticProps() {
  const eventCalendarPath = path.join(process.cwd(), 'content', 'calendar.md');
  const eventCalendarContent = fs.readFileSync(eventCalendarPath, 'utf8');
  const { data: calendarData } = matter(eventCalendarContent);

  const navPath = path.join(process.cwd(), "content", "navbar.md");
  const navContent = fs.readFileSync(navPath, "utf8");
  const { data: navData } = matter(navContent);

  return {
    props: {
      title: calendarData.title,
      body: calendarData.body,
      navbar: navData,
    },
  };
}
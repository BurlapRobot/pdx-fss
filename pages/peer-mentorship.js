import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";

export default function PeerMentorship({ title, body }) {
  return (
    // NOTE: will this hold a generic page component like in figma? are we waiting on content?
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
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "peer-mentorship.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: fileData } = matter(fileContent);

  const navPath = path.join(process.cwd(), "content", "navbar.md");
  const navContent = fs.readFileSync(navPath, "utf8");
  const { data: navData } = matter(navContent);

  return {
    props: {
      title: fileData.title,
      body: fileData.body,
      navbar: navData,
    },
  };
}

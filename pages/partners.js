import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";
import { getCommonPageProps } from "../utils/getPageProps";

export default function Partners({ title, body }) {
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
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "partners.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: fileData } = matter(fileContent);

  const commonProps = await getCommonPageProps();

  return {
    props: {
      title: fileData.title,
      body: fileData.body,
      ...commonProps,
    },
  };
}

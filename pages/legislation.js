import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";
import { getCommonPageProps } from "../utils/getPageProps";

export default function Legislation({ content }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-white">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <div className="prose prose-lg mx-auto">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "legislation.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: fileData } = matter(fileContent);

  const commonProps = await getCommonPageProps();

  return {
    props: {
      content: fileData.content,
      navbar: navData,
      ...commonProps,
    },
  };
}

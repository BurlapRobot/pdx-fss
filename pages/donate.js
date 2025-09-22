import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { getCommonPageProps } from "../utils/getPageProps";
import Head from "next/head";

export default function Donate({ content }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>
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
  const filePath = path.join(process.cwd(), "content", "donate.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);

  const commonProps = await getCommonPageProps();

  return {
    props: {
      content,
      ...commonProps,
    },
  };
}

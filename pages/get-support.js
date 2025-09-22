import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";
import { getCommonPageProps } from "../utils/getPageProps";
import Head from "next/head";

export default function GetSupport({ title, content }) {
  return (
    // NOTE: will this hold a generic page component like in figma? are we waiting on content?
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex-1 bg-white">
        <div className="max-w-4xl mx-auto py-8 px-4 space-y-12">
          <section>
            <div className="mb-6 text-lg prose prose-lg">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "get-support.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: fileData } = matter(fileContent);

  const commonProps = await getCommonPageProps();

  return {
    props: {
      title: fileData.title,
      content: fileData.content,
      ...commonProps,
    },
  };
}

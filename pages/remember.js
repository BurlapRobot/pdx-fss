import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";
import { getCommonPageProps } from "../utils/getPageProps";
import Head from "next/head";

export default function Remember({ title, content }) {
  return (
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
  const rememberPath = path.join(process.cwd(), "content", "remember.md");
  const rememberContent = fs.readFileSync(rememberPath, "utf8");
  const { data: rememberData } = matter(rememberContent);

  const commonProps = await getCommonPageProps();

  return {
    props: {
      title: rememberData.title,
      content: rememberData.content,
      ...commonProps,
    },
  };
}

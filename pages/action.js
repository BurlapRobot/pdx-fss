import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";
import { getCommonPageProps } from "../utils/getPageProps";
import Head from "next/head";

export default function TakeAction({ title, content }) {
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
  const actionPath = path.join(process.cwd(), "content", "action.md");
  const actionContent = fs.readFileSync(actionPath, "utf8");
  const { data: actionData } = matter(actionContent);

  const commonProps = await getCommonPageProps();

  return {
    props: {
      title: actionData.title,
      content: actionData.content,
      ...commonProps,
    },
  };
}

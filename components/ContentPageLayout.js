import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function ContentPageLayout({ title, content }) {
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
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {content}
              </ReactMarkdown>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

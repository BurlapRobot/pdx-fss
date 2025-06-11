import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';

export default function Home({ content }) {
  return (
    <Layout>
      <main className="prose mx-auto p-4">
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'get-involved.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContent);

  return {
    props: {
      content,
    },
  };
}


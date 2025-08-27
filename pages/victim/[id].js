import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { getCommonPageProps } from '../../utils/getPageProps';

export default function VictimDetail({ victim }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 bg-white">
          <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-4">Loading...</h1>
          </div>
        </main>
      </div>
    );
  }

  if (!victim) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 bg-white">
          <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-4">Victim Not Found</h1>
            <p className="mb-4">The victim you&apos;re looking for could not be found.</p>
            <Link href="/victims" className="text-blue-600 hover:text-blue-800">
              ← Back to Victims Memorial
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto py-8 px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/victims" className="text-blue-600 hover:text-blue-800 underline">
              Portland Victims Memorial
            </Link>
          </div>

          {/* Victim Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Image */}
            <div>
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                {victim.image ? (
                  <Image 
                    src={victim.image} 
                    alt={victim.name} 
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">No image available</div>
                  </div>
                )}
              </div>
              {victim.photoCredit && (
                <p className="text-sm text-gray-500 mt-2">{victim.photoCredit}</p>
              )}
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {victim.name}, {victim.age}
                </h1>
                <p className="text-lg font-semibold text-gray-900 mb-1">
                  Victim of Unsafe Streets in Portland
                </p>
                <p className="text-base text-gray-700 mb-3 capitalize">
                  {victim.victimType}
                </p>
                <p className="text-sm text-gray-600">
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                    {victim.location}
                  </a>, {victim.date}, {victim.time}
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {victim.description}
                </p>
              </div>

              {/* Action Sections */}
              <div className="space-y-6 pt-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Report a Victim</h2>
                  <p className="text-gray-700">
                    Have you or someone you know been harmed by a crash in Portland?{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                      Contact us to tell your story and help make a difference.
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Nationwide Story Map</h2>
                  <p className="text-gray-700">
                    <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                      Families for Safe Streets maintains a map of crashes across the country.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const victimsDirectory = path.join(process.cwd(), 'content/victims');
  const filenames = fs.readdirSync(victimsDirectory);

  const paths = filenames
    .filter(filename => filename.endsWith('.md'))
    .map((filename, index) => {
      return {
        params: {
          id: (index + 1).toString(),
        },
      };
    });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const victimsDirectory = path.join(process.cwd(), 'content/victims');
  const filenames = fs.readdirSync(victimsDirectory);

  const markdownFiles = filenames
    .filter(filename => filename.endsWith('.md'))
    .sort(); // Sort alphabetically for consistent ordering

  const requestedId = parseInt(params.id);
  const fileIndex = requestedId - 1; // Convert ID to 0-based index

  const commonProps = await getCommonPageProps();
  
  if (fileIndex < 0 || fileIndex >= markdownFiles.length) {
    return {
      props: {
        victim: null,
        ...commonProps,
      },
    };
  }

  const filename = markdownFiles[fileIndex];
  const filePath = path.join(victimsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const victim = {
    id: requestedId,
    name: data.name || '',
    age: data.age || 0,
    victimType: data.victimType || '',
    location: data.location || '',
    date: data.date || '',
    time: data.time || '',
    image: data.image || null, // Ensure image is null if undefined
    photoCredit: data.photoCredit || '',
    description: content.trim() || ''
  };

  return {
    props: {
      victim,
      ...commonProps,
    },
  };
} 
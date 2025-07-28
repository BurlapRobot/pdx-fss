import { useState, useEffect, useRef, useCallback } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import VictimCard from '../components/VictimCard';

export default function Victims({ victims }) {
  const [sortBy, setSortBy] = useState('');
  const [displayCount, setDisplayCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();
  const loadingRef = useRef();

  const sortedVictims = [...victims].sort((a, b) => {
    switch (sortBy) {
    case 'name':
      return a.name.localeCompare(b.name);
    case 'date':
      return new Date(a.date) - new Date(b.date);
    case 'age':
      return a.age - b.age;
    case 'type':
      return a.victimType.localeCompare(b.victimType);
    default:
      return a.id - b.id; // Default sort by ID (order)
    }
  });

  const displayedVictims = sortedVictims.slice(0, displayCount);

  // Load more victims function
  const loadMore = useCallback(() => {
    if (displayCount < sortedVictims.length && !isLoading) {
      setIsLoading(true);
      // Simulate a small delay for better UX
      setTimeout(() => {
        setDisplayCount(prev => Math.min(prev + 8, sortedVictims.length));
        setIsLoading(false);
      }, 300);
    }
  }, [displayCount, sortedVictims.length, isLoading]);

  // Intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayCount < sortedVictims.length) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMore, displayCount, sortedVictims.length]);

  // Reset display count when sorting changes
  useEffect(() => {
    setDisplayCount(12);
  }, [sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto py-8 px-4">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Remembering Victims of Unsafe Streets in Portland
          </h1>
          
          {/* Intro Text */}
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Action Sections */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Report a Victim</h2>
              <p className="text-gray-700 mb-3">
                Have you or someone you know been harmed by a crash in Portland? 
                <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">
                  Contact us to tell your story and help make a difference.
                </a>
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Nationwide Story Map</h2>
              <p className="text-gray-700">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Families for Safe Streets maintains a map of crashes across the 
                  country.
                </a>
              </p>
            </div>
          </div>

          {/* Memorial Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
                Portland Victims Memorial
              </h2>
              <div className="flex items-center space-x-2">
                <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm 
                    focus:outline-none focus:ring-2ocus:ring-blue-500"
                >
                  <option value="">Select a sorting method...</option>
                  <option value="name">Name</option>
                  <option value="date">Date</option>
                  <option value="age">Age</option>
                  <option value="type">Victim Type</option>
                </select>
              </div>
            </div>

            {/* Victims Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedVictims.map((victim) => (
                <VictimCard
                  key={victim.id}
                  id={victim.id}
                  image={victim.image}
                  name={victim.name}
                  age={victim.age}
                  victimType={victim.victimType}
                  location={victim.location}
                  date={victim.date}
                  time={victim.time}
                  description={victim.description}
                />
              ))}
            </div>

            {/* Loading Indicator */}
            {displayCount < sortedVictims.length && (
              <div 
                ref={loadingRef}
                className="text-center mt-8 py-4"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
                    <span className="text-gray-600">Loading more victims...</span>
                  </div>
                ) : (
                  <div className="h-4"></div> // Invisible element for intersection observer
                )}
              </div>
            )}

            {/* End of results indicator */}
            {displayCount >= sortedVictims.length && sortedVictims.length > 0 && (
              <div className="text-center mt-8 py-4">
                <p className="text-gray-500 text-sm">
                  Showing all {sortedVictims.length} victims
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const victimsDirectory = path.join(process.cwd(), 'content/victims');
  const filenames = fs.readdirSync(victimsDirectory);

  const victims = filenames
    .filter(filename => filename.endsWith('.md'))
    .map((filename, index) => {
      const filePath = path.join(victimsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        id: index + 1, // Auto-generate ID based on order
        name: data.name || '',
        age: data.age || 0,
        victimType: data.victimType || '',
        location: data.location || '',
        date: data.date || '',
        time: data.time || '',
        image: data.image || null, // Ensure image is null if undefined
        photoCredit: data.photoCredit || '',
        description: content.trim() || '',
        slug: filename.replace('.md', '') // Store filename for reference
      };
    })
    .sort((a, b) => a.id - b.id); // Sort by generated ID

  // Load navbar frontmatter
  const navPath = path.join(process.cwd(), 'content', 'navbar.md');
  const navContent = fs.readFileSync(navPath, 'utf8');
  const { data: navData } = matter(navContent);

  return {
    props: {
      victims,
      navbar: navData,
    },
  };
} 
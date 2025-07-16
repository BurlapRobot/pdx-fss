import { useState } from 'react';
import AlertBar from '../components/AlertBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VictimCard from '../components/VictimCard';

// Sample victim data - this would typically come from a CMS or API
const sampleVictims = [
  {
    id: 1,
    name: "Jasper Collins",
    age: 34,
    victimType: "Pedestrian",
    location: "Columbia Avenue",
    date: "August 15, 2021",
    time: "9:50 AM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null
  },
  {
    id: 2,
    name: "Sophia Taylor",
    age: 31,
    victimType: "Bicyclist",
    location: "Division Street",
    date: "September 22, 2021",
    time: "7:30 PM",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: null
  },
  {
    id: 3,
    name: "Marcus Rodriguez",
    age: 28,
    victimType: "Motorcyclist",
    location: "Burnside Bridge",
    date: "October 8, 2021",
    time: "11:15 AM",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: null
  },
  {
    id: 4,
    name: "Emma Johnson",
    age: 42,
    victimType: "Driver",
    location: "SE Powell Boulevard",
    date: "November 3, 2021",
    time: "3:45 PM",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: null
  },
  {
    id: 5,
    name: "David Chen",
    age: 29,
    victimType: "Pedestrian",
    location: "NW 23rd Avenue",
    date: "December 12, 2021",
    time: "6:20 PM",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: null
  },
  {
    id: 6,
    name: "Lisa Thompson",
    age: 35,
    victimType: "Bicyclist",
    location: "SE Hawthorne Boulevard",
    date: "January 7, 2022",
    time: "8:10 AM",
    description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: null
  },
  {
    id: 7,
    name: "Robert Wilson",
    age: 45,
    victimType: "Motorcyclist",
    location: "NE Sandy Boulevard",
    date: "February 14, 2022",
    time: "4:30 PM",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    image: null
  },
  {
    id: 8,
    name: "Sarah Davis",
    age: 33,
    victimType: "Pedestrian",
    location: "SW Morrison Street",
    date: "March 5, 2022",
    time: "10:25 AM",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: null
  },
  {
    id: 9,
    name: "Michael Brown",
    age: 38,
    victimType: "Driver",
    location: "NE Broadway",
    date: "April 18, 2022",
    time: "2:15 PM",
    description: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    image: null
  },
  {
    id: 10,
    name: "Jennifer Lee",
    age: 27,
    victimType: "Bicyclist",
    location: "SE Belmont Street",
    date: "May 9, 2022",
    time: "5:40 PM",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    image: null
  },
  {
    id: 11,
    name: "Christopher Garcia",
    age: 41,
    victimType: "Pedestrian",
    location: "NW Glisan Street",
    date: "June 22, 2022",
    time: "7:55 PM",
    description: "Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate.",
    image: null
  },
  {
    id: 12,
    name: "Amanda White",
    age: 36,
    victimType: "Motorcyclist",
    location: "SE Stark Street",
    date: "July 11, 2022",
    time: "1:20 PM",
    description: "Velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    image: null
  }
];

export default function Victims() {
  const [sortBy, setSortBy] = useState('');
  const [displayCount, setDisplayCount] = useState(12);

  const sortedVictims = [...sampleVictims].sort((a, b) => {
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
        return 0;
    }
  });

  const displayedVictims = sortedVictims.slice(0, displayCount);

  return (
    <div className="min-h-screen flex flex-col">
      <AlertBar />
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto py-8 px-4">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Remembering Victims of Unsafe Streets in Portland
          </h1>
          
          {/* Intro Text */}
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                  Families for Safe Streets maintains a map of crashes across the country.
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
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

            {/* Load More Button */}
            {displayCount < sortedVictims.length && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setDisplayCount(prev => Math.min(prev + 12, sortedVictims.length))}
                  className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 
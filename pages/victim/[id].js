import { useRouter } from 'next/router';
import AlertBar from '../../components/AlertBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: null,
    photoCredit: "Photo courtesy of the Collins family"
  },
  {
    id: 2,
    name: "Sophia Taylor",
    age: 31,
    victimType: "Bicyclist",
    location: "Division Street",
    date: "September 22, 2021",
    time: "7:30 PM",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: null,
    photoCredit: "Photo courtesy of the Taylor family"
  },
  {
    id: 3,
    name: "Marcus Rodriguez",
    age: 28,
    victimType: "Motorcyclist",
    location: "Burnside Bridge",
    date: "October 8, 2021",
    time: "11:15 AM",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: null,
    photoCredit: "Photo courtesy of the Rodriguez family"
  },
  {
    id: 4,
    name: "Emma Johnson",
    age: 42,
    victimType: "Driver",
    location: "SE Powell Boulevard",
    date: "November 3, 2021",
    time: "3:45 PM",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: null,
    photoCredit: "Photo courtesy of the Johnson family"
  },
  {
    id: 5,
    name: "David Chen",
    age: 29,
    victimType: "Pedestrian",
    location: "NW 23rd Avenue",
    date: "December 12, 2021",
    time: "6:20 PM",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: null,
    photoCredit: "Photo courtesy of the Chen family"
  },
  {
    id: 6,
    name: "Lisa Thompson",
    age: 35,
    victimType: "Bicyclist",
    location: "SE Hawthorne Boulevard",
    date: "January 7, 2022",
    time: "8:10 AM",
    description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image: null,
    photoCredit: "Photo courtesy of the Thompson family"
  },
  {
    id: 7,
    name: "Robert Wilson",
    age: 45,
    victimType: "Motorcyclist",
    location: "NE Sandy Boulevard",
    date: "February 14, 2022",
    time: "4:30 PM",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: null,
    photoCredit: "Photo courtesy of the Wilson family"
  },
  {
    id: 8,
    name: "Sarah Davis",
    age: 33,
    victimType: "Pedestrian",
    location: "SW Morrison Street",
    date: "March 5, 2022",
    time: "10:25 AM",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    image: null,
    photoCredit: "Photo courtesy of the Davis family"
  },
  {
    id: 9,
    name: "Michael Brown",
    age: 38,
    victimType: "Driver",
    location: "NE Broadway",
    date: "April 18, 2022",
    time: "2:15 PM",
    description: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nisi ut aliquid ex ea commodi consequatur?",
    image: null,
    photoCredit: "Photo courtesy of the Brown family"
  },
  {
    id: 10,
    name: "Jennifer Lee",
    age: 27,
    victimType: "Bicyclist",
    location: "SE Belmont Street",
    date: "May 9, 2022",
    time: "5:40 PM",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    image: null,
    photoCredit: "Photo courtesy of the Lee family"
  },
  {
    id: 11,
    name: "Christopher Garcia",
    age: 41,
    victimType: "Pedestrian",
    location: "NW Glisan Street",
    date: "June 22, 2022",
    time: "7:55 PM",
    description: "Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    image: null,
    photoCredit: "Photo courtesy of the Garcia family"
  },
  {
    id: 12,
    name: "Amanda White",
    age: 36,
    victimType: "Motorcyclist",
    location: "SE Stark Street",
    date: "July 11, 2022",
    time: "1:20 PM",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus.",
    image: null,
    photoCredit: "Photo courtesy of the White family"
  }
];

export default function VictimDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Find the victim by ID
  const victim = sampleVictims.find(v => v.id === parseInt(id));

  if (!victim) {
    return (
      <div className="min-h-screen flex flex-col">
        <AlertBar />
        <Navbar />
        <main className="flex-1 bg-white">
          <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-4">Victim Not Found</h1>
            <p className="mb-4">The victim you're looking for could not be found.</p>
            <Link href="/victims" className="text-blue-600 hover:text-blue-800">
              ← Back to Victims Memorial
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AlertBar />
      <Navbar />
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
                  <img src={victim.image} alt={victim.name} className="w-full h-full object-cover" />
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
      <Footer />
    </div>
  );
} 
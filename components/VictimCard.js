import Link from "next/link";
import Image from "next/image";

const VictimCard = ({ id, image, name, age, victimType, location, date, time, description }) => (
  <Link href={`/victim/${id}`} className="block">
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="aspect-w-16 aspect-h-12 bg-gray-200">
        {image ? (
          <Image 
            src={image} 
            alt={name} 
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-sm">No image available</div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{name}, {age}</h3>
        <p className="text-sm text-gray-600 mb-2 capitalize">{victimType}</p>
        <p className="text-xs text-gray-500 mb-3">{location}, {date}, {time}</p>
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  </Link>
);

export default VictimCard; 
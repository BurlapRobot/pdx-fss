import Link from "next/link";
import Image from "next/image";

const VictimCard = ({
  id,
  image,
  name,
  age,
  victimType,
  location,
  date,
  time,
  description,
}) => (
  <Link href={`/victim/${id}`} className="block !no-underline">
    <div
      className="bg-white overflow-hidden hover:shadow-md 
        transition-shadow cursor-pointer md:h-[500px]"
    >
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
      <div className="py-2">
        <h3 className="font-semibold text-2xl">
          {name}, {age}
        </h3>
        <p className="capitalize font-semibold">{victimType}</p>
        <p className="font-semibold">{location}</p>
        <p className="font-semibold">
          {date}, {time}
        </p>
        <p className="mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  </Link>
);

export default VictimCard;

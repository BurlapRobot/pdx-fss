import Image from "next/image";

const ContentCard = ({ image, heading, text, cta, ctaLink }) => (
  <div className="bg-gray-50 border border-gray-200 rounded shadow p-4 flex flex-col h-full">
    <Image
      src={image}
      alt={heading}
      width={400}
      height={160}
      className="w-full h-40 object-cover rounded mb-4"
    />
    <h3 className="font-bold text-lg mb-2">{heading}</h3>
    <p className="text-sm mb-4 flex-1">{text}</p>
    <a href={ctaLink} className="inline-block mt-auto bg-primary_50 text-black px-3 py-1 rounded text-xs font-semibold">
      {cta}
    </a>
  </div>
);

export default ContentCard;
import Image from "next/image";

const ContentCard = ({ image, heading, text, cta, ctaLink }) => {
  const buttonStyle =
    cta === "[Donate CTA]"
      ? "bg-primary_50 rounded px-3 font-semibold"
      : "bg-transparent";

  return (
    <div className="rounded p-4 flex flex-col h-full max-w-[720px]">
      <Image
        src={image}
        alt={heading}
        width={400}
        height={320}
        className="w-full h-80 object-cover rounded mb-4"
      />
      <h3 className="font-bold text-lg mb-2">{heading}</h3>
      <p className="text-sm mb-4 flex-1">{text}</p>
      <div>
        <a
          href={ctaLink}
          className={`
          text-black
          py-2
          text-xs
          ${buttonStyle}`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
};

export default ContentCard;

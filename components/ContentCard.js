import Image from "next/image";
import Link from "next/link";

const ContentCard = ({ image, heading, text, cta, ctaLink }) => {
  return (
    <div className="rounded p-4 flex flex-col h-full max-w-[720px]">
      <Image
        src={image}
        alt={heading}
        width={400}
        height={320}
        className="w-full h-80 object-cover rounded mb-4"
      />
      <Link
        href={ctaLink}
        className="block no-link-style hover:shadow-md transition-shadow cursor-pointer"
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        <h3 className="font-bold text-3xl mb-2">{heading}</h3>
        <p className="mb-4 flex-1">{text}</p>
        <div>
          {ctaLink === "/donate" ? (
            <div className="inline-block bg-primary_50  
            hover:bg-primary_65 hover:shadow-[2px_2px_0px_0px_#BD9400]
            active:shadow-[-2px_-2px_0px_0px_#BD9400]
            text-center !font-semibold !text-black !no-underline
            text-base py-2 px-4">
              {cta}
            </div>
          ) : (
            <span className="hover:bg-primary_65 transition-colors duration-200 
            focus:outline-neutral_65 font-normal text-neutral_0 underline py-1"
            >
              {cta}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;

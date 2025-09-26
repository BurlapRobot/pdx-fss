import Image from "next/image";
import StyledLink from "./shared/StyledLink";

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
      <h3 className="font-bold text-lg mb-2">{heading}</h3>
      <p className="text-sm mb-4 flex-1">{text}</p>
      <div>
        {cta === "[Donate CTA]" ? (
          <StyledLink href={ctaLink} size="small">
            {cta}
          </StyledLink>
        ) : (
          <a href={ctaLink} className="text-black py-2 text-sm">
            {cta}
          </a>
        )}
      </div>
    </div>
  );
};

export default ContentCard;

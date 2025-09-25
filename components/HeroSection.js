import React from "react";
import StyledLink from "./shared/StyledLink";

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  backgroundImage,
  buttonUrl,
}) => (
  <section
    className="relative  min-h-96 
     aspect-[2.14/1] max-w-[1728px] flex
      flex-col items-center justify-center bg-cover bg-center w-full mx-auto"
  >
    <div
      className="w-full h-60 sm:absolute sm:inset-0 sm:h-full bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="hidden sm:block absolute inset-0 bg-black/60 "></div>
    </div>

    <div className="bg-black sm:bg-transparent relative z-10 text-left max-w-2xl px-2 sm:px-6 py-3">
      <h1 className="text-4xl md:text-5xl font-bold text-primary_65 leading-tight mb-2">
        {title.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h1>
      <p className="text-white mb-4">{subtitle}</p>
      <StyledLink href={buttonUrl}>{buttonText}</StyledLink>
    </div>
  </section>
);

export default HeroSection;

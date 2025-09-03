import React from "react";

const HeroSection = ({ title, subtitle, buttonText, backgroundImage, buttonUrl }) => (
  <section
    className="relative min-h-96 aspect-[2.14/1]  flex items-center justify-center bg-cover bg-center "
    style={{ backgroundImage: `url('${backgroundImage}')` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    <div className="relative z-10 text-left max-w-2xl px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-primary_65 leading-tight mb-2">
        {title.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h1>
      <p className="text-white mb-4">{subtitle}</p>
      <a href={buttonUrl} className="bg-primary_65 text-black font-semibold px-4 py-2 rounded shadow">{buttonText}</a>
    </div>
  </section>
);

export default HeroSection;
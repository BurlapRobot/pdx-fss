import React from "react";

const HeroSection = ({ title, subtitle, buttonText, backgroundImage }) => (
  <section
    className="relative h-96 flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url('${backgroundImage}')` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    <div className="relative z-10 text-left max-w-2xl px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 leading-tight mb-2">
        {title.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h1>
      <p className="text-white mb-4">{subtitle}</p>
      <button className="bg-yellow-300 text-black font-semibold px-4 py-2 rounded shadow">{buttonText}</button>
    </div>
  </section>
);

export default HeroSection; 
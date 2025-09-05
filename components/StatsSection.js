import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const StatsSection = ({ image, heading, subheading, text, ctaLink, cta }) => (
  <section className="bg-primary_65 py-8 px-4 flex flex-col md:flex-row items-center justify-center gap-8">
    <Image
      src={image}
      alt={heading}
      width={320}
      height={240}
      className="aspect-[1.5/1] w-[320px] sm:w-[428px] sm:h-[280px] rounded"
    />
    <div className="max-w-lg">
      <h2 className="font-bold text-2xl mb-2">{heading}</h2>
      <h3 className="font-semibold text-lg mb-1">{subheading}</h3>
      <p className="text-sm mb-2">{text}</p>
      <Link href={ctaLink} className="text-xs underline">
        {cta}
      </Link>
    </div>
  </section>
);

StatsSection.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  ctaLink: PropTypes.string,
  cta: PropTypes.string,
};

export default StatsSection;

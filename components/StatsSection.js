import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

const StatsSection = ({ image, heading, subheading, text, ctaLink, cta }) => (
  <section className="bg-yellow-300 py-8 px-4 flex flex-col md:flex-row items-center justify-center gap-8">
    <Image
      src={image}
      alt={heading}
      width={256}
      height={160}
      className={`
      bg-gray-100
      border
      border-gray-300
      flex
      items-center
      justify-center
      text-gray-500
      text-lg
      font-semibold`}
    />
    <div className="max-w-lg">
      <h2 className="font-bold text-lg mb-2">{heading}</h2>
      <p className="font-semibold mb-1">{subheading}</p>
      <p className="text-sm mb-2">{text}</p>
      <Link href={ctaLink} className="text-xs underline">{cta}</Link>
    </div>
  </section>
);

StatsSection.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  ctaLink: PropTypes.string,
  cta: PropTypes.string
}

export default StatsSection;
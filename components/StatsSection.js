import PropTypes from 'prop-types';

const StatsSection = ({ image, heading, subheading, text, ctaLink, cta }) => (
  <section className="bg-yellow-300 py-8 px-4 flex flex-col md:flex-row items-center justify-center gap-8">
    <div className={`
      bg-gray-100
      border
      border-gray-300
      w-64
      h-40
      flex
      items-center
      justify-center
      text-gray-500
      text-lg
      font-semibold`}>
      {image}
    </div>
    <div className="max-w-lg">
      <h2 className="font-bold text-lg mb-2">{heading}</h2>
      <p className="font-semibold mb-1">{subheading}</p>
      <p className="text-sm mb-2">{text}</p>
      <a href={ctaLink} className="text-xs underline">{cta}</a>
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
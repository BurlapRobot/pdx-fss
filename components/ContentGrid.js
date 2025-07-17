import PropTypes from 'prop-types';
import ContentCard from "./ContentCard";

const ContentGrid = ({ cardData }) => (
  <section className="bg-white py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
    {cardData?.map((card, idx) => (
      <ContentCard key={idx} {...card} />
    ))}
  </section>
);

ContentGrid.propTypes = {
  cardData: PropTypes.array
};

export default ContentGrid;
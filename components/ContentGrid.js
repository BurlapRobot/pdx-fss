import PropTypes from "prop-types";
import ContentCard from "./ContentCard";

const ContentGrid = ({ cardData }) => (
  <div className="w-full bg-white">
    <section
      className="
      bg-white
        py-8
        px-4
        grid
        grid-cols-1
        md:grid-cols-2
        place-items-center
        gap-8
        w-full
        max-w-[1728px]
        mx-auto"
    >
      {cardData?.map((card, idx) => (
        <ContentCard key={idx} {...card} />
      ))}
    </section>
  </div>
);

ContentGrid.propTypes = {
  cardData: PropTypes.array,
};

export default ContentGrid;

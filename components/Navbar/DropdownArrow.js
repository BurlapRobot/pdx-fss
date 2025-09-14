import PropTypes from "prop-types";

const DropdownArrow = ({ isExpanded }) => {
  const caratStyles = isExpanded
    ? "fill-black stroke-black"
    : "group-hover:fill-black group-hover:stroke-black";

  return (
    <span
      className={`
        flex h-[24px] w-[16px] ml-1
        ${isExpanded ? "rotate-180" : "group-hover:rotate-180"}
        duration-200 transition-transform`}
    >
      <svg
        viewBox="0 0 100 50"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        className={`
        fill-[#FFCA08]
        stroke-[#FFCA08]
        ${caratStyles}`}
      >
        <polygon
          points="12,8 88,8 50,42"
          strokeLinejoin="round"
          strokeWidth="6"
        />
        <polygon
          points="12,8 88,8 50,42"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="14"
        />
      </svg>
    </span>
  );
};

DropdownArrow.propTypes = {
  isExpanded: PropTypes.bool,
};

export default DropdownArrow;

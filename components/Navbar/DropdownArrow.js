import Image from "next/image";
import PropTypes from "prop-types";

const DropdownArrow = ({ isExpanded }) => {
  return (
    <span
      className={`
        flex h-[24px] min-w-[16px] ml-1
        ${isExpanded ? "rotate-180" : "group-hover:rotate-180"}
        duration-200 transition-transform`}
    >
      <Image
        src="/images/FSS-assets/icon-caret-down.svg"
        className={`group-hover:invert-0 group-hover:brightness-0
          ${isExpanded ? "invert-0 brightness-0" : ""}`}
        alt="icon x"
        height={21}
        width={14}
      />
    </span>
  );
};

DropdownArrow.propTypes = {
  isExpanded: PropTypes.bool,
};

export default DropdownArrow;

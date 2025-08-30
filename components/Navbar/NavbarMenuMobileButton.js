import Link from "next/link";
import PropTypes from "prop-types";
import { useState } from "react";

const NavbarMenuMobileButton = ({ menuItem, isOpenMenu }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className={`${isOpenMenu ? "static" : "hidden"}`}>
      <button
        className={`
          flex
          items-center
          px-4 
          py-2
          w-full
          ${isExpanded ? "bg-primary_50 text-neutral_0" : ""}`}
        onClick={() => {
          setIsExpanded((prev) => !prev);
        }}
      >
        {menuItem.text}
        {menuItem.links && (
          <span
            className={`
                  ml-1
                  transition-transform
                  duration-200
                  ${isExpanded ? "text-black rotate-180" : "text-primary_50"}`}
          >
            ▼
          </span>
        )}
      </button>
      {menuItem.links && menuItem.links.length > 0 && (
        <ul
          className={`
                  bg-neutral_20
                  border-primary_5
                  w-full
                  shadow-lg
                  z-50
                  list-none
                  m-0
                  p-0
                  transition-all
                  duration-300
                  ${isExpanded ? "h-[calc(100%-44px)]" : "h-0 hidden"}`}
        >
          {menuItem.links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className={`
                        text-neutral_95
                        block
                        hover:bg- hover:text-primary_50
                        text-left
                        px-4
                        py-2`}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

NavbarMenuMobileButton.propTypes = {
  menuItem: PropTypes.shape({
    text: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string,
      })
    ),
  }),
  isOpenMenu: PropTypes.bool,
};

export default NavbarMenuMobileButton;

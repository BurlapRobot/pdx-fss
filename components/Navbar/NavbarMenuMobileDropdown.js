import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import DownCarat from "./DownCarat";
import NavbarMenuItem from "./NavbarMenuItem";

const NavbarMenuMobileDropdown = ({ menuItem, isOpenMenu }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

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
        {menuItem.links && <DownCarat isExpanded={isExpanded} />}
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
            <NavbarMenuItem link={link} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
};

NavbarMenuMobileDropdown.propTypes = {
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

export default NavbarMenuMobileDropdown;

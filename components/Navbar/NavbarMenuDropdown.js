import { useEffect, useRef } from "react";
import DropdownArrow from "./DropdownArrow";
import NavbarMenuItem from "./NavbarMenuItem";
import PropTypes from "prop-types";

const NavbarMenuDropdown = ({ menuItem, selectedItem, setSelectedItem }) => {
  const isOpen = selectedItem === menuItem.text;
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSelectedItem("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, setSelectedItem]);

  useEffect(() => {
    const handleResize = () => {
      setSelectedItem("");
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setSelectedItem]);

  return (
    <li className="group relative" ref={dropdownRef}>
      <button
        className={`flex items-center px-4 py-2 
          group-hover:bg-primary_50 group-hover:text-neutral_0
          ${isOpen ? "bg-primary_50 text-neutral_0" : ""}`}
        onClick={() => {
          setSelectedItem((prev) => {
            if (prev === menuItem.text) return "";
            return menuItem.text;
          });
        }}
      >
        {menuItem.text}
        {menuItem.links && <DropdownArrow isExpanded={isOpen} />}
      </button>
      {menuItem.links && menuItem.links.length > 0 && (
        <ul
          className={`absolute 
            bg-neutral_20 border-primary_5 shadow-lg
            w-full m-0 p-0 z-50 list-none
            ${isOpen ? "block" : "hidden group-hover:block"}
            `}
        >
          {menuItem.links.map((link, index) => (
            <NavbarMenuItem link={link} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
};

NavbarMenuDropdown.propTypes = {
  menuItem: PropTypes.shape({
    text: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string,
      })
    ),
  }),
  selectedItem: PropTypes.shape({
    text: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string,
      })
    ),
  }),
  setSelectedItem: PropTypes.func,
};

export default NavbarMenuDropdown;

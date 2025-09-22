import DropdownArrow from "./DropdownArrow";
import NavbarMenuItem from "./NavbarMenuItem";
import PropTypes from "prop-types";

const NavbarMenuDropdown = ({ menuItem }) => {
  return (
    <li className="group relative">
      <button className="flex items-center px-4 py-2 hover:bg-primary_50 hover:text-neutral_0">
        {menuItem.text}
        {menuItem.links && <DropdownArrow />}
      </button>
      {menuItem.links && menuItem.links.length > 0 && (
        <ul
          className="hidden group-hover:block absolute 
            bg-neutral_20 border-primary_5 shadow-lg
            w-[241px] m-0 p-0 z-50 list-none"
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
};

export default NavbarMenuDropdown;

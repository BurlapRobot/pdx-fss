import PropTypes from "prop-types";
import NavbarMenuDropdown from "./NavbarMenuDropdown";

const NavMenu = ({ menu }) => {
  return (
    <ul className="flex items-center space-x-6 text-xs text-neutral_95">
      {menu?.map((menuItem, index) => (
        <NavbarMenuDropdown menuItem={menuItem} key={index} />
      ))}
    </ul>
  );
};

NavMenu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          url: PropTypes.string,
        })
      ),
    })
  ),
  isOpenMenu: PropTypes.bool,
};

export default NavMenu;

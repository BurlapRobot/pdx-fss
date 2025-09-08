import PropTypes from "prop-types";
import NavbarMenuMobileButton from "./NavbarMenuMobileButton";

const NavMenuMobile = ({ menu, isOpenMenu }) => {
  return (
    <ul
      className={`
            flex
            flex-col
            right-0
            w-full
            top-[60px]
            z-50
            bg-black
            absolute
            text-lg
            text-neutral_95
            transition-all
            duration-300
            ${isOpenMenu ? "h-full" : "h-0"}`}
    >
      {menu?.map((menuItem, index) => (
        <NavbarMenuMobileButton
          key={index}
          menuItem={menuItem}
          isOpenMenu={isOpenMenu}
        />
      ))}
    </ul>
  );
};

NavMenuMobile.propTypes = {
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

export default NavMenuMobile;

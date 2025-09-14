import PropTypes from "prop-types";
import NavbarMenuDropdown from "./NavbarMenuDropdown";
import { useIsMobile } from "../../hooks/useIsMobile";
import Image from "next/image";
import NavbarMenuMobileDropdown from "./NavbarMenuMobileDropdown";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavMenu = ({ menu }) => {
  const isMobile = useIsMobile();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [pathname]);

  return isMobile ? (
    <>
      <button
        className="w-8 h-8 grid place-items-center ml-[10px]"
        onClick={() => {
          setIsOpenMenu((prev) => !prev);
        }}
      >
        <Image
          src={
            isOpenMenu
              ? "/images/FSS-assets/icon-x.svg"
              : "/images/FSS-assets/icon-menu.svg"
          }
          className="invert brightness-0"
          alt="icon x"
          height={16}
          width={20}
        />
      </button>
      <ul
        className={`flex flex-col right-0 w-full top-[60px] 
          z-50 bg-black absolute text-lg text-neutral_95 
          transition-all duration-300
          ${isOpenMenu ? "h-full" : "h-0"}`}
      >
        {menu?.map((menuItem, index) => (
          <NavbarMenuMobileDropdown
            key={index}
            menuItem={menuItem}
            isOpenMenu={isOpenMenu}
          />
        ))}
      </ul>
    </>
  ) : (
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
};

export default NavMenu;

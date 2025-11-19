import PropTypes from "prop-types";
import NavbarMenuDropdown from "./NavbarMenuDropdown";
import { useIsMobile } from "../../hooks/useIsMobile";
import Image from "next/image";
import NavbarMenuMobileDropdown from "./NavbarMenuMobileDropdown";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavMenu = ({ menu, navbarPosition }) => {
  const isMobile = useIsMobile();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpenMenu(false);
    setSelectedItem(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpenMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenMenu]);

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
        className={`flex flex-col right-0 w-full
          divide-y divide-neutral_20 border-t border-neutral_20
          z-50 bg-black absolute text-lg text-neutral_95 
          transition-all duration-300`}
        style={{
          top: `${navbarPosition}px`,
          height: `${isOpenMenu ? "100%" : "0"}`,
        }}
      >
        {menu?.map((menuItem, index) => (
          <NavbarMenuMobileDropdown
            key={index}
            menuItem={menuItem}
            isOpenMenu={isOpenMenu}
            lastItem={index === menu.length - 1}
          />
        ))}
      </ul>
    </>
  ) : (
    <ul className="flex items-center space-x-0 lg:space-x-6 text-xs text-neutral_95">
      {menu?.map((menuItem, index) => (
        <NavbarMenuDropdown
          menuItem={menuItem}
          key={index}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
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
  navbarPosition: PropTypes.number,
};

export default NavMenu;

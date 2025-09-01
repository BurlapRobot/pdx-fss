import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useIsMobile } from "../../hooks/useIsMobile";
import HamburgerMenuIcon from "../icons/HamburgerMenuIcon";
import { useState } from "react";
import NavMenuMobile from "./NavbarMenuMobile";
import NavMenu from "./NavbarMenu";

const Navbar = ({ title, subtitle, menu }) => {
  const isMobile = useIsMobile();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <nav className="bg-neutral_0 text-primary_50 px-2 md:px-4 py-2 flex items-center justify-between w-full">
      <div className="flex flex-row items-center space-x-2">
        <Link href="/">
          <Image
            src="/images/FSS-assets/FSS-Logo.svg"
            alt="FSS Logo"
            width={64}
            height={64}
          />
        </Link>
        <div className="flex flex-col">
          <span className="text-sm">
            <Link href="/">{title}</Link>
          </span>
          <span className="text-xs font-thin">
            <Link href="/">{subtitle}</Link>
          </span>
        </div>
      </div>
      <div className="flex flex-row md:flex-col items-center md:items-end space-x-3 md:space-y-2">
        <button className="w-[65px] md:w-[80px] py-1.5 bg-primary_50 text-black text-sm text-center font-semibold">
          Donate
        </button>
        {isMobile ? (
          <>
            <button
              className="w-6 h-6"
              onClick={() => {
                setIsOpenMenu((prev) => !prev);
              }}
            >
              <HamburgerMenuIcon />
            </button>
            <NavMenuMobile menu={menu} isOpenMenu={isOpenMenu} />
          </>
        ) : (
          <NavMenu menu={menu} />
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
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

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useIsMobile } from "../../hooks/useIsMobile";
import HamburgerMenuIcon from "../icons/HamburgerMenuIcon";
import { useEffect, useState } from "react";
import NavMenuMobile from "./NavbarMenuMobile";
import NavMenu from "./NavbarMenu";
import { usePathname } from "next/navigation";

const Navbar = ({ title, subtitle, menu }) => {
  const isMobile = useIsMobile();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [pathname]);

  return (
    <nav
      className="
          bg-neutral_0
          text-primary_50
          px-2 
          h-[58px]
          md:px-4 
          md:h-auto
          md:py-2
          flex 
          items-center
          justify-between
          w-full
          max-w-[1728px]
          mx-auto"
    >
      <div className="flex flex-row items-center space-x-2">
        <Link href="/">
          <Image
            src="/images/FSS-assets/FSS-Logo.svg"
            className="w-[35px] h-[35px] md:w-[64px] md:h-[64px]"
            alt="FSS Logo"
            width={64}
            height={64}
          />
        </Link>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">
            <Link href="/">{title}</Link>
          </span>
          <span className="text-sm font-normal">
            <Link href="/">{subtitle}</Link>
          </span>
        </div>
      </div>
      <div className="flex flex-row md:flex-col items-center md:items-end space-x-2 md:space-x-0 md:space-y-2 pl-[15px] pr-[10px]">
        <button className="h-8 leading-4 w-[75px] h-[34px] md:w-[80px] py-2 bg-primary_50 text-black text-sm text-center font-semibold">
          Donate
        </button>
        {isMobile ? (
          <>
            <button
              className="w-8 h-8 grid place-items-center pl-[10px]"
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

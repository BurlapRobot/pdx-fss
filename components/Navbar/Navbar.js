import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import NavMenu from "./NavbarMenu";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ title, subtitle, menu }) => {
  const [navbarPosition, setNavbarPosition] = useState(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (!navbarRef.current && !isMobile) return;
    const handleResize = (entries) => {
      setNavbarPosition(entries[0]?.target.clientHeight);
    };
    const observer = new ResizeObserver(handleResize);
    observer.observe(navbarRef.current);

    setNavbarPosition(navbarRef.current.clientHeight);

    return () => observer.disconnect();
  }, [navbarRef]);

  return (
    <div
      className="
        w-full
        border-t 
        border-primary_50
        large:border-t-2
      "
    >
    <nav
      className="bg-neutral_0 text-primary_50
      px-2 py-2 md:px-4 w-full max-w-[1728px] mx-auto
      flex items-center justify-between"
      ref={navbarRef}
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
        <div
          className="
          flex flex-row md:flex-col items-center md:items-end 
          space-x-2 md:space-x-0 md:space-y-2 pl-[15px] pr-[10px]"
        >
          Donate
        </button>
        <NavMenu menu={menu} navbarPosition={navbarPosition} />
      </div>
    </nav>
  </div>
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

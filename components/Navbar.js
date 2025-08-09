import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const Navbar = ({ title, subtitle, menu }) => {
  return (
    <nav className="bg-neutral_0 text-primary_50 px-4 py-2 flex items-center justify-between w-full">
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
          <span className="text-sm">{title}</span>
          <span className="text-xs font-thin">{subtitle}</span>
        </div>
      </div>
      <ul className="flex space-x-6 text-xs text-neutral_95">
        {menu?.map((menuItem, index) => (
          <li key={index} className="group relative">
            <button className="flex items-center px-4 py-2 hover:bg-primary_50 hover:text-neutral_0">
              {menuItem.text}
              {menuItem.links && (
                <span
                  className={`
                  ml-1
                  text-primary_50
                  transition-transform
                  duration-200
                  group-hover:text-black group-hover:rotate-180`}
                >
                  ▼
                </span>
              )}
            </button>
            {menuItem.links && menuItem.links.length > 0 && (
              <ul
                className="hidden
                  group-hover:block
                  absolute
                  bg-neutral_20
                  border-primary_5
                  w-[241px]
                  shadow-lg
                  z-50
                  list-none
                  m-0
                  p-0"
              >
                {menuItem.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className={`
                        text-neutral_95
                        block
                        hover:bg- hover:text-primary_50
                        text-left
                        px-4
                        py-2`}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* <div className="text-xs cursor-pointer text-nowrap">🔍</div> */}
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

import Link from "next/link";
import PropTypes from "prop-types";

const NavMenu = ({ menu }) => {
  return (
    <ul className="flex items-center space-x-6 text-xs text-neutral_95">
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

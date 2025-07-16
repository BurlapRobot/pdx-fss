import PropTypes from 'prop-types';

const Navbar = ({logo, title, menu}) => {
  return (
    <nav className="bg-black text-yellow-300 px-4 py-2 flex items-center justify-between w-full">
      <div className="flex items-center space-x-2">
        {/* TODO: add logo icon */}
        <span className="font-bold text-sm">{logo}</span>
        <span className="text-xs">{title}</span>
      </div>
      <ul className="flex space-x-6 text-xs text-white">
        {menu?.map((menuItem, index) => (
          <li key={index} className="group relative">
            <button className="flex items-center px-4 py-2 hover:bg-yellow-300 hover:text-black">
              {menuItem.text}
              {menuItem.links && (
                <span className={`
                  ml-1
                  text-yellow-300
                  transition-transform
                  duration-200
                  group-hover:text-black group-hover:rotate-180`}>
                    ▼
                </span>
              )}
            </button>
            {menuItem.links && menuItem.links.length > 0 && (
              <ul className="hidden group-hover:block absolute bg-gray-800 w-[241px] shadow-lg z-50 list-none m-0 p-0">
                {menuItem.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className={`
                        text-white
                        block
                        hover:bg-black hover:text-yellow-300
                        text-left
                        px-4
                        py-2`}>
                      {link.text}
                    </a>
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
  menu: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    })),
  })),
};

export default Navbar;
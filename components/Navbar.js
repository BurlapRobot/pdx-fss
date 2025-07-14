import { useState } from "react";

const Navbar = ({logo, title, menu}) => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="bg-black text-yellow-300 px-4 py-2 flex items-center justify-between w-full">
      <div className="flex items-center space-x-2">
        {/* TODO: add logo */}
        <span className="font-bold text-sm">{logo}</span>
        <span className="text-xs">{title}</span>
      </div>

      <ul className="flex space-x-6 text-xs">
        {menu.map((menuItem, index) => (
          <li key={index}>
            <button onClick={() => setOpenMenu(openMenu === index ? null : index)} className="hover:underline">{menuItem.text}
            </button>
            {openMenu === index && (
              <ul>
                {menuItem.items.map((link, index) => (
                  <li key={index}><a href={link.url} className="hover:underline">{link.text}</a></li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* TODO: add a search input? */}
      <div className="text-xs cursor-pointer text-nowrap">Search 🔍</div>
    </nav>
  );
};

export default Navbar;
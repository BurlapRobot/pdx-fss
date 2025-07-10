
const Navbar = ({title, subtitle, links}) => (
  <nav className="bg-black text-yellow-300 px-4 py-2 flex items-center justify-between w-full">
    <div className="flex items-center space-x-2">
      {/* TODO: won't this be a logo/img? */}
      <span className="font-bold text-sm">{title}</span>
      <span className="text-xs">{subtitle}</span>
    </div>
    <ul className="flex space-x-6 text-xs">
      {/* TODO: won't these be dropdowns? */}
      {links.map((link, index) => (
        <li key={index}><a href={link.url} className="hover:underline">{link.text}</a></li>
      ))}
    </ul>
    {/* TODO: add a search input? */}
    <div className="text-white cursor-pointer">🔍</div>
  </nav>
);

export default Navbar;
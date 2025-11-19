import Link from "next/link";
import PropTypes from "prop-types";

const NavbarMenuItem = ({ link }) => {
  return (
    <li>
      <Link
        href={link.url}
        className="block text-left sm:px-4 py-3
          bg-neutral_20
          text-neutral_95  hover:text-primary_50"
      >
        {link.text}
      </Link>
    </li>
  );
};

NavbarMenuItem.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default NavbarMenuItem;

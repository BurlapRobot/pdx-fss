import Link from "next/link";
import PropTypes from "prop-types";

const NavbarMenuItem = ({ link }) => {
  return (
    <li>
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

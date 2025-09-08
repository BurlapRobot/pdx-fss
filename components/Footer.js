import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-neutral_0 text-primary_50 text-xs py-6 md:px-8 px-4 ">
      <div className="flex flex-col md:flex-row justify-between md:justify-normal md:items-start ">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between my-3 md:mb-3 md:my-0 md:items-start md:justify-normal">
            <span className="font-bold">
              Families for Safe Streets <br />
              <span className="font-normal">Portland</span>
            </span>
            <button className="w-[65px] md:hidden md:w-[80px] py-1.5 bg-primary_50 text-black text-sm text-center font-semibold">
              Donate
            </button>
          </div>

          <div className="flex space-x-2 my-4">
            <Link href={SOCIAL_LINKS.TWITTER} className="hover:underline">
              <Image
                src="/images/FSS-assets/icon-twitter.svg"
                alt="twitter button"
                width={18}
                height={18}
              />
            </Link>
            <Link href={SOCIAL_LINKS.FACEBOOK} className="hover:underline">
              <Image
                src="/images/FSS-assets/icon-facebook.svg"
                alt="facebook button"
                width={18}
                height={18}
              />
            </Link>
            <Link href={SOCIAL_LINKS.INSTAGRAM} className="hover:underline">
              <Image
                src="/images/FSS-assets/icon-instagram.svg"
                alt="instagram button"
                width={18}
                height={18}
              />
            </Link>
          </div>
        </div>

        <div className="my-2 space-y-4 flex flex-col text-white md:ml-8 md:my-0 ">
          <div>
            <Link href="/about">About Us</Link>
          </div>
          <div>
            <Link href="/about">Who We Are</Link>
          </div>
          <div>
            <Link href="/about">Leadership</Link>
          </div>
          <div>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
        <button
          className="hidden md:block w-[65px] md:w-[80px] py-1.5
         bg-primary_50 text-black text-sm text-center font-semibold md:ml-auto md:mb-auto"
        >
          Donate
        </button>
      </div>
      <div className="text-neutral_100 mt-4 md:mt-8 lg:mt-12 ">
        © 2025 Families for Safe Streets, Portland
      </div>
    </footer>
  );
};

export default Footer;

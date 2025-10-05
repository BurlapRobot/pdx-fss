import StyledLink from "./shared/StyledLink";

const NewsletterSignup = () => (
  <section
    className="bg-gray-100 border-t border-b border-dotted border-gray-400
      py-4 px-4 flex flex-col items-center "
  >
    <div className="max-w-[500px]">
      <p className="text-sm mb-2">
        Join our email list for information on upcoming events and
        opportunities.
        <br />
        We anticipate one to two email messages per month.
      </p>
      <form className="flex justify-center">
        <StyledLink size='small' href='/email-signup'>Sign Up</StyledLink>
      </form>
    </div>
  </section>
);

export default NewsletterSignup;

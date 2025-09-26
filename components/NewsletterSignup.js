import StyledButton from "./shared/StyledButton";

const NewsletterSignup = () => (
  <section
    className="bg-gray-100 border-t border-b border-dotted border-gray-400
      py-4 px-4 flex flex-col items-center"
  >
    <div className="max-w-[500px]">
      <p className="text-sm mb-2">
        Join our email list for information on upcoming events and
        opportunities.
        <br />
        We anticipate one to two email messages per month.
      </p>
      <form className="flex items-end text-sm space-x-2 w-full">
        <fieldset className="w-full text-sm">
          <legend className="mb-2 text-neutral_50 font-semibold">
            Your Email Address
          </legend>
          <input
            type="email"
            placeholder="email@email.com"
            className="px-2 py-1 h-8 md:h-9 border border-gray-300 rounded w-full"
          />
        </fieldset>
        <StyledButton type="submit">Submit</StyledButton>
      </form>
    </div>
  </section>
);

export default NewsletterSignup;

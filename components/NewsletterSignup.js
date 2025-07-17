
const NewsletterSignup = () => (
  <section className="bg-gray-100 border-t border-b border-dotted border-gray-400 py-4 px-4 flex flex-col items-center">
    <p className="text-xs mb-2">
      Join our email list for information on upcoming events and opportunities.
      <br/>
      We anticipate one to two email messages per month.
    </p>
    <form className="flex items-center space-x-2">
      <input type="email" placeholder="email@email.com" className="px-2 py-1 border border-gray-300 rounded text-xs" />
      <button type="submit" className="bg-yellow-300 text-black px-3 py-1 rounded text-xs font-semibold">Submit</button>
    </form>
  </section>
);

export default NewsletterSignup;
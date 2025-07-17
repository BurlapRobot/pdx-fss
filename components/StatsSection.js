
const StatsSection = () => (
  <section className="bg-yellow-300 py-8 px-4 flex flex-col md:flex-row items-center justify-center gap-8">
    <div className={`
      bg-gray-100
      border
      border-gray-300
      w-64
      h-40
      flex
      items-center
      justify-center
      text-gray-500
      text-lg
      font-semibold`}>
      IMAGE TBD
    </div>
    <div className="max-w-lg">
      <h2 className="font-bold text-lg mb-2">The faces behind the statistics</h2>
      <p className="font-semibold mb-1">Oregon lives needlessly lost in preventable crashes on Portland roads</p>
      <p className="text-sm mb-2">
        The Families for Safe Streets Portland online memorial project honors and remembers lives lost to
        vehicle crashes and those who have suffered life-changing injuries on the streets of Portland, Oregon.
      </p>
      <a href="#" className="text-xs underline">[Remembering Victims Memorial CTA]</a>
    </div>
  </section>
);

export default StatsSection;
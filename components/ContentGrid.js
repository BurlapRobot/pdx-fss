/* eslint-disable max-len */
import ContentCard from "./ContentCard";

const cardData = [
  {
    image: "/images/support.jpg",
    heading: "Get Support",
    text: "No one should endure the physical and emotional trauma of traffic violence alone. Resources for those directly impacted by road violence.",
    cta: "Support Call to Action",
    ctaLink: "#"
  },
  {
    image: "/images/mission.jpg",
    heading: "[Mission Hed]",
    text: "Portland Families for Safe Streets advocates for life-saving changes throughout our transportation system that will prevent crashes.",
    cta: "Mission Call to Action",
    ctaLink: "#"
  },
  {
    image: "/images/remembrance.jpg",
    heading: "World Day of Remembrance",
    text: "Honoring all who have lost their lives or have been directly impacted by roadway crashes. This global UN Sponsored Day of Remembrance acknowledges the widespread suffering inflicted on the victims' families and communities.",
    cta: "[WDR Call to Action]",
    ctaLink: "#"
  },
  {
    image: "/images/donate.jpg",
    heading: "[Donate Hed]",
    text: "Your donation ensures we can more effectively advocate for safe streets and provide support to those directly impacted by traffic violence.",
    cta: "[Donate CTA]",
    ctaLink: "#"
  }
];

const ContentGrid = () => (
  <section className="bg-white py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
    {cardData.map((card, idx) => (
      <ContentCard key={idx} {...card} />
    ))}
  </section>
);

export default ContentGrid;
import { getCommonPageProps } from "../utils/getPageProps";
import ContentPageLayout from "../components/ContentPageLayout";
import getStaticPropsData from "../utils/getStaticPropsHelper";

export default function ContactUs({
  title,
  content,
  metaDescription,
  metaImage,
}) {
  return (
    <ContentPageLayout
      title={title}
      content={content}
      description={metaDescription}
      image={metaImage}
    />
  );
}

export async function getStaticProps() {
  const data = getStaticPropsData("contact-us.md");
  const commonProps = await getCommonPageProps();

  return {
    props: {
      title: data.title,
      content: data.content,
      metaDescription: data.metaDescription,
      metaImage: data.metaImage,
      ...commonProps,
    },
  };
}

import { getCommonPageProps } from "../utils/getPageProps";
import ContentPageLayout from "../components/ContentPageLayout";
import getStaticPropsData from "../utils/getStaticPropsHelper";

export default function Test({ title, content }) {
  return <ContentPageLayout title={title} content={content} noIndex />;
}

export async function getStaticProps() {
  const data = getStaticPropsData("test.md");
  const commonProps = await getCommonPageProps();

  return {
    props: {
      title: data.title,
      content: data.content,
      ...commonProps,
    },
  };
}

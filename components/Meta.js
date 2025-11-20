import Head from "next/head";

export const Meta = ({
  title,
  description,
  image,
  url,
  type = "website",
  noIndex = false,
}) => {
  const siteName = "Portland Families for Safe Streets";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription =
    "Families for Safe Streets Portland - memorials, resources and advocacy for safer streets.";
  const metaDescription = description ?? defaultDescription;

  const SITE_URL = "https://pdxfamiliesforsafestreets.org";
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const fullImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}/images/support.jpg`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {/* <meta name="keywords" content="Portland, etc" /> */}
      {/* Canonical URL  */}
      {url && <link rel="canonical" href={fullUrl} />}
      {/* Robots  */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      {/* Open Graph  */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      {/* Twitter Card  */}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullImage} />
      {/* Favicon  */}
      <link
        rel="icon"
        href="/images/FSS-assets/FSS-Logo.svg"
        type="image/svg+xml"
      />
    </Head>
  );
};

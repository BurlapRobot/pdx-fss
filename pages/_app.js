import Head from "next/head";
import Layout from "../components/Layout";
import PreviewProvider from "../components/PreviewProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PDX FSS</title>
        <link
          rel="icon"
          href="/images/FSS-assets/FSS-Logo.svg"
          type="image/svg+xml"
        />
      </Head>
      <PreviewProvider>
        <Layout navbar={pageProps.navbar} alertBar={pageProps.alertBar}>
          <Component {...pageProps} />
        </Layout>
      </PreviewProvider>
    </>
  );
}

export default MyApp;

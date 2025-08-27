import Head from "next/head";
import Layout from "../components/Layout";
import PreviewProvider from "../components/PreviewProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PDX Families for Safe Streets</title>
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

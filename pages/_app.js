import Head from "next/head";
import Layout from "../components/Layout";
import PreviewProvider from "../components/PreviewProvider";
import "../styles/globals.css";
import { usePathname } from "next/navigation";

function MyApp({ Component, pageProps }) {
  const pathname = usePathname();

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
        {pathname === "/admin" ? (
          <Component {...pageProps} />
        ) : (
          <Layout navbar={pageProps.navbar} alertBar={pageProps.alertBar}>
            <Component {...pageProps} />
          </Layout>
        )}
      </PreviewProvider>
    </>
  );
}

export default MyApp;

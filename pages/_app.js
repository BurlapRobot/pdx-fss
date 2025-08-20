import '../styles/globals.css';
import PreviewProvider from '../components/PreviewProvider';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <PreviewProvider>
      <Layout navbar={pageProps.navbar} alertBar={pageProps.alertBar}>
        <Component {...pageProps} />
      </Layout>
    </PreviewProvider>
  );
}

export default MyApp; 
import '../styles/globals.css';
import PreviewProvider from '../components/PreviewProvider';

function MyApp({ Component, pageProps }) {
  return (
    <PreviewProvider>
      <Component {...pageProps} />
    </PreviewProvider>
  );
}

export default MyApp; 
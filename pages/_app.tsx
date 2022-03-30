import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components';
import Head from 'next/head';
import { AppProvider } from '../store/Context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name="description" content="NextJs Events" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;

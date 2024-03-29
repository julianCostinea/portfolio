import Head from 'next/head';
import Layout from "../hoc/Layout";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png" />
        <meta property="og:site_name" content="Spot My Next" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp

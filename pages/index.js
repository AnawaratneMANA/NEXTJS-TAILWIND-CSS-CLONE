import Head from 'next/head';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>

      {/* Navigation Bar */}
      <Navigation/>

      {/* Card Layout */}
    </div>
  );
}

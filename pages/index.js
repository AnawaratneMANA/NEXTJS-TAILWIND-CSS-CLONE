import Head from 'next/head';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Results from '../components/Results';
import requests from "../utils/request"
export default function Home(props) {
  console.log(props)
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
      <Results/>
    </div>
  );
}

// Server Side rendering function
export async function getServerSideProps(context){
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url}`).then((res) => res.json());

    return {
      props: {
        results: request.results,
      },
    };
}
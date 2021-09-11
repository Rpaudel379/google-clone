import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Response from "../response";

const Search = ({ results }) => {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      {/* header */}
      <Header />
      {/* search results */}
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  console.log(process.env.API_KEY);

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  // after the server has rendered ... pass the results to the client

  return {
    props: {
      results: data,
    },
  };
};

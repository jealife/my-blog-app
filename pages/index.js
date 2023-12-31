import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_POSTS } from "@/components/graphql/queries";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Welcome to the JeaBlog</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <br />
        <h2>All Post</h2>
        <br />
        {posts.map((val,i) => {
          return (
            <div key={i}>
              <h3>{val.title} </h3>
              <img src={val.coverPhoto.url} alt="Image Cover" />
              <p>{val.content.html}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  // code
  const client = new ApolloClient({
    uri: "https://api-eu-west-2.hygraph.com/v2/clkwe2leq041o01uk4rcv91js/master",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: GET_ALL_POSTS,
  });

  return {
    props: {
      posts: data.posts,
    },
  };
}

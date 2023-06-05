import { client } from "@/graphql/apollo-client";
import { GET_POSTS } from "@/graphql/queries";

export async function getServerSideProps() {
  const { data } = await client.query({ query: GET_POSTS });

  return {
    props: {
      posts: data,
    },
  };
}

export default function Home({ posts }: any) {
  console.log({ posts });

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

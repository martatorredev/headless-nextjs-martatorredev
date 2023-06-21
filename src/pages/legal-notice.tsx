import TextPage from "@/components/TextPage/TextPage";
import { client } from "@/graphql/apollo-client";
import { GET_LEGAL_NOTICE, GET_POSTS } from "@/graphql/queries";
import { PagesAPIResponse } from "@/interfaces/PagesApi.interface";

export async function getServerSideProps() {
  const data = await client.query<PagesAPIResponse>({
    query: GET_POSTS,
  });

  return {
    props: {
      data,
    },
  };
}

type Props = {
  data: PagesAPIResponse;
};

export default function Page({ data }: Props) {
  console.log({ data });
  return (
    <TextPage
      title={data?.data?.pages?.edges[0]?.node?.title}
      html={data?.data?.pages?.edges[0]?.node?.content}
    />
  );
}

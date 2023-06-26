import TextPage from "@/components/TextPage/TextPage";
import { client } from "@/graphql/apollo-client";
import { GET_PRIVACY_POLICY } from "@/graphql/queries";
import { PagesAPIResponse } from "@/interfaces/PagesApi.interface";

export async function getStaticProps() {
  const data = await client.query<PagesAPIResponse>({
    query: GET_PRIVACY_POLICY,
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
  return (
    <TextPage
      title={data?.data?.pages?.edges[0]?.node?.title}
      html={data?.data?.pages?.edges[0]?.node?.content}
    />
  );
}

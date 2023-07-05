import TextPage from "@/components/TextPage/TextPage";
import { client } from "@/graphql/apollo-client";
import { GET_LEGAL_NOTICE } from "@/graphql/queries";
import { PagesAPIResponse } from "@/interfaces/PagesApi.interface";
import { useQuery } from "@apollo/client";

// export async function getStaticProps() {
//   const data = await client.query<PagesAPIResponse>({
//     query: GET_LEGAL_NOTICE,
//   });

//   return {
//     props: {
//       data,
//     },
//   };
// }

// type Props = {
//   data: PagesAPIResponse;
// };

export default function Page() {
  const data = useQuery(GET_LEGAL_NOTICE);
  return (
    <TextPage
      title={data?.data?.pages?.edges[0]?.node?.title}
      html={data?.data?.pages?.edges[0]?.node?.content}
    />
  );
}

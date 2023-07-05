import { client } from "@/graphql/apollo-client";
import { GET_LATEST_POSTS } from "@/graphql/queries";
import { LatestsPostsAPIResponse } from "@/interfaces/LatestsPostsApi.interface";
import AboutSection from "@/components/HomePage/AboutSection/AboutSection";
import DoAndDontsSection from "@/components/HomePage/DoAndDontsSection/DoAndDontsSection";
import Footer from "@/components/Footer/Footer";
import HomeSection from "@/components/HomePage/HomeSection/HomeSection";
import LatestArticlesSection from "@/components/HomePage/LatestArticlesSection/LatestArticlesSection";
import ServicesSection from "@/components/HomePage/ServicesSection/ServicesSection";
import VisionSection from "@/components/HomePage/VisionSection/VisionSection";
import ContactSectionNew from "@/components/HomePage/ContactSection/ContactSectionNew";
import { useQuery } from "@apollo/client";

// export async function getStaticProps() {
//   const data = await client.query<LatestsPostsAPIResponse>({
//     query: GET_LATEST_POSTS,
//   });

//   return {
//     props: {
//       latestsPosts: data,
//     },
//   };
// }

// type Props = {
//   latestsPosts: LatestsPostsAPIResponse;
// };

export default function Home() {
  const data = useQuery(GET_LATEST_POSTS);
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <VisionSection />
      <DoAndDontsSection />
      <LatestArticlesSection posts={data?.data?.posts} />
      <ContactSectionNew />
      <Footer />
    </main>
  );
}

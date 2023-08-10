import { client } from "@/graphql/apollo-client";
import { GET_LATEST_POSTS,GET_ALL_POSTS,GET_CATEGORIES } from "@/graphql/queries";
import { LatestsPostsAPIResponse } from "@/interfaces/LatestsPostsApi.interface";
import AboutSection from "@/components/HomePage/AboutSection/AboutSection";
import DoAndDontsSection from "@/components/HomePage/DoAndDontsSection/DoAndDontsSection";
import Footer from "@/components/Footer/Footer";
import HomeSection from "@/components/HomePage/HomeSection/HomeSection";
import LatestArticlesSection from "@/components/HomePage/LatestArticlesSection/LatestArticlesSection";
import PostsSection from "@/components/BlogPage/PostsSection";
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
  const data = useQuery(GET_ALL_POSTS);
  const categoriesData = useQuery(GET_CATEGORIES);  
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <VisionSection />
      <DoAndDontsSection />
      {data.data && categoriesData.data && (
        <PostsSection
          postsData={data as any}
          categoriesData={categoriesData as any}
        />
      )}
      {/*
      <LatestArticlesSection posts={data?.data?.posts} />
       */}
      <ContactSectionNew />
      <Footer />
    </main>
  );
}

import { client } from "@/graphql/apollo-client";
import { GET_LATEST_POSTS } from "@/graphql/queries";
import { LatestsPostsAPIResponse } from "@/interfaces/LatestsPostsApi.interface";
import AboutSection from "@/components/HomePage/AboutSection/AboutSection";
import ContactSection from "@/components/HomePage/ContactSection/ContactSection";
import DoAndDontsSection from "@/components/HomePage/DoAndDontsSection/DoAndDontsSection";
import Footer from "@/components/Footer/Footer";
import HomeSection from "@/components/HomePage/HomeSection/HomeSection";
import LatestArticlesSection from "@/components/HomePage/LatestArticlesSection/LatestArticlesSection";
import ServicesSection from "@/components/HomePage/ServicesSection/ServicesSection";
import VisionSection from "@/components/HomePage/VisionSection/VisionSection";
import ContactSectionNew from "@/components/HomePage/ContactSection/ContactSectionNew";

export async function getServerSideProps() {
  const data = await client.query<LatestsPostsAPIResponse>({
    query: GET_LATEST_POSTS,
  });

  return {
    props: {
      latestsPosts: data,
    },
  };
}

type Props = {
  latestsPosts: LatestsPostsAPIResponse;
};

export default function Home({ latestsPosts }: Props) {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <VisionSection />
      <DoAndDontsSection />
      <LatestArticlesSection posts={latestsPosts?.data?.posts} />
      <ContactSectionNew />
      <Footer />
    </main>
  );
}

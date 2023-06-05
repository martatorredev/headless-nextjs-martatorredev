import { client } from "@/graphql/apollo-client";
import { GET_LATEST_POSTS } from "@/graphql/queries";
import { LatestsPostsAPIResponse } from "@/interfaces/LatestsPostsApi.interface";
import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import DoAndDontsSection from "@/components/DoAndDontsSection/DoAndDontsSection";
import Footer from "@/components/Footer/Footer";
import HomeSection from "@/components/HomeSection/HomeSection";
import LatestArticlesSection from "@/components/LatestArticlesSection/LatestArticlesSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import VisionSection from "@/components/VisionSection/VisionSection";

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
      <ContactSection />
      <Footer />
    </main>
  );
}

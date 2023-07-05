import NewsletterSection from "@/components/BlogPage/NewsletterSection";
import PostsSection from "@/components/BlogPage/PostsSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { client } from "@/graphql/apollo-client";
import { GET_CATEGORIES, GET_POSTS } from "@/graphql/queries";
import { CategoriesAPIResponse } from "@/interfaces/CategoriesApi.interface";
import { LatestsPostsAPIResponse } from "@/interfaces/LatestsPostsApi.interface";
import { useQuery } from "@apollo/client";

// export async function getStaticProps() {
//   const postsData = await client.query<LatestsPostsAPIResponse>({
//     query: GET_POSTS,
//   });

//   const categoriesData = await client.query<CategoriesAPIResponse>({
//     query: GET_CATEGORIES,
//   });

//   return {
//     props: {
//       postsData,
//       categoriesData,
//     },
//   };
// }

// type Props = {
//   postsData: LatestsPostsAPIResponse;
//   categoriesData: CategoriesAPIResponse;
// };

export default function Page() {
  const postsData = useQuery(GET_POSTS);
  const categoriesData = useQuery(GET_CATEGORIES);
  return (
    <main>
      <div className="min-h-[80vh]">
        <Header />
        <div className="max-w-4xl px-8 mx-auto">
          <h2 className="mt-[10vh] font-bold uppercase text-[2.5rem] text-center text-white">
            Marta Torre's Blog
          </h2>
          <p className="mt-6 text-[2rem] font-[500] text-center text-appGreen">
            Web dev stuff, the latest on WordPress, and other random thoughts
          </p>
          <p className="mt-6 text-center text-white">
            Did you know that WordPress was born as a blog? Its story began as a
            content management system, and look how far it has come.
          </p>
          <p className="mt-6 text-center text-white">
            But at its core, that initial goal still beats: to democratize
            information and make it accessible to everyone.
          </p>
          <p className="mt-6 text-center text-white">
            So, as a developer, open-source enthusiast, and advocate for more
            causes than I can fit in this paragraph, can you think of a better
            place to share what I know, what I’m still learning, and, even
            better, what I think about it all without holding back?
          </p>
          <p className="mt-6 text-center text-white">
            Me neither, so here’s my blog about WordPress, web development, and
            some personal opinions thrown in.
          </p>
        </div>
      </div>
      {postsData.data && categoriesData.data && (
        <PostsSection
          postsData={postsData as any}
          categoriesData={categoriesData as any}
        />
      )}
      <NewsletterSection />
      <Footer />
    </main>
  );
}

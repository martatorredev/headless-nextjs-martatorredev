import BlogItem from "@/components/BlogItem/BlogItem";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { client } from "@/graphql/apollo-client";
import { GET_CATEGORIES, GET_POSTS } from "@/graphql/queries";
import { CategoriesAPIResponse } from "@/interfaces/CategoriesApi.interface";
import { LatestsPostsAPIResponse } from "@/interfaces/LatestsPostsApi.interface";
import { useState } from "react";

export async function getServerSideProps() {
  const postsData = await client.query<LatestsPostsAPIResponse>({
    query: GET_POSTS,
  });

  const categoriesData = await client.query<CategoriesAPIResponse>({
    query: GET_CATEGORIES,
  });

  return {
    props: {
      postsData,
      categoriesData,
    },
  };
}

type Props = {
  postsData: LatestsPostsAPIResponse;
  categoriesData: CategoriesAPIResponse;
};

export default function Page({ postsData, categoriesData }: Props) {
  const categoriesOptions = categoriesData.data.categories.edges.map(
    (cat) => cat.node.name
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const posts = postsData?.data?.posts?.edges;

  const filteredPosts =
    selectedCategory === ""
      ? posts
      : posts?.filter((post) =>
          post.node.categories.nodes.some(
            (cat) => cat.name === selectedCategory
          )
        );

  return (
    <main>
      <div className="background-blog min-h-[80vh]">
        <Header />
        <div className="max-w-4xl px-8 mx-auto">
          <h2 className="mt-[10vh] uppercase text-5xl text-center text-white">
            Marta Torre's Blog
          </h2>
          <p className="mt-4 text-3xl text-center text-appGreen">
            Web dev stuff, the latest on WordPress, and other random thoughts
          </p>
          <p className="mt-4 text-center text-white">
            Did you know that WordPress was born as a blog? Its story began as a
            content management system, and look how far it has come.
          </p>
          <p className="mt-4 text-center text-white">
            But at its core, that initial goal still beats: to democratize
            information and make it accessible to everyone.
          </p>
          <p className="mt-4 text-center text-white">
            So, as a developer, open-source enthusiast, and advocate for more
            causes than I can fit in this paragraph, can you think of a better
            place to share what I know, what I’m still learning, and, even
            better, what I think about it all without holding back?
          </p>
          <p className="mt-4 text-center text-white">
            Me neither, so here’s my blog about WordPress, web development, and
            some personal opinions thrown in.
          </p>
        </div>
      </div>
      <section className="px-8 pt-16 pb-24 mx-auto max-w-7xl">
        <select
          className="px-4 py-2 mb-8"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categoriesOptions.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center sm:justify-items-start">
          {filteredPosts?.map((post, idx) => (
            <BlogItem key={idx} post={post} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

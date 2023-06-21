import { TEXT1, TITLE } from "./constants";
import { LatestPosts } from "@/interfaces/LatestsPostsApi.interface";
import BlogItem from "../../BlogItem/BlogItem";

type Props = {
  posts: LatestPosts;
};

const LatestArticlesSection = ({ posts }: Props) => {
  return (
    <section className="pt-24 pb-24">
      <div className="flex flex-col items-center px-8 ">
        <span className="block mb-4 text-2xl text-center text-appGreen">
          {TEXT1}
        </span>
        <h2 className="text-4xl text-center text-white uppercase">{TITLE}</h2>
        <div className="flex flex-wrap justify-center gap-16 mt-8">
          {posts?.edges?.map((post, idx) => (
            <BlogItem key={idx} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;

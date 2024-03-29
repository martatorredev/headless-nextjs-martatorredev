import { LatestPostEdge } from "@/interfaces/LatestsPostsApi.interface";
import { reemplazarEspaciosPorGuiones } from "@/utils/utils";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  post: LatestPostEdge;
};

const dateFormatProps: any = { year: "numeric", month: "long", day: "numeric" };

const BlogItem = ({ post }: Props) => {
  const router = useRouter();
  if (!post) return null;

  const formatedDate = new Intl.DateTimeFormat("en-US", dateFormatProps).format(
    new Date(post?.node?.date)
  );

  const handleGoToPost = (id: string) => {
    window.open(`https://en.martatorre.dev/${id}`, "_blank");
  };

  return (
    <div className="max-w-[345px]  w-full">
      <Image
        src={post?.node?.featuredImage?.node?.sourceUrl}
        alt="blog"
        width={345}
        height={145}
        onClick={() =>
          handleGoToPost(reemplazarEspaciosPorGuiones(post?.node?.title))
        }
        className="cursor-pointer"
      />
      <div className="flex justify-between items-center flex-col w-full px-8 py-8 bg-white min-h-[335px]">
        <div className="max-w-[250px] flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            {post?.node?.categories?.nodes?.map((cat, idx) => (
              <span
                onClick={() => router.push(`/blog?category=${cat?.name}#blogs`)}
                key={idx}
                className="px-2 py-1 text-sm font-light uppercase cursor-pointer bg-appGreen"
              >
                {cat?.name}
              </span>
            ))}
          </div>
          <span className="mt-2 font-light">{formatedDate}</span>
          <a
            onClick={() =>
              handleGoToPost(reemplazarEspaciosPorGuiones(post?.node?.title))
            }
            className="mt-2 mb-6 font-bold text-center cursor-pointer text-appBlack hover:underline"
          >
            {post?.node?.title}
          </a>
        </div>
        <div>
          <button
            onClick={() =>
              handleGoToPost(reemplazarEspaciosPorGuiones(post?.node?.title))
            }
            className="px-10 py-4 font-semibold text-white uppercase transition bg-appBlack hover:bg-appBlue"
          >
            Read post
          </button>
        </div>
      </div>
    </div>
  );
};
export default BlogItem;

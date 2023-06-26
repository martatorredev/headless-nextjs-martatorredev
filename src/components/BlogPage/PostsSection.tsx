import { CategoriesAPIResponse } from "@/interfaces/CategoriesApi.interface";
import { LatestsPostsAPIResponse } from "@/interfaces/LatestsPostsApi.interface";
import React, { useEffect, useState } from "react";
import BlogItem from "../BlogItem/BlogItem";
import usePagination from "@/hooks/usePagination";
import useFilterPosts from "@/hooks/useFilterPosts";
import { useRouter } from "next/router";

type Props = {
  postsData: LatestsPostsAPIResponse;
  categoriesData: CategoriesAPIResponse;
};

const PostsSection = ({ postsData, categoriesData }: Props) => {
  const posts = postsData?.data?.posts?.edges;

  const router = useRouter();

  const { category } = router.query;

  const {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    nextPage,
    prevPage,
  } = usePagination({ array: posts, itemsPerPage: 9 });

  const {
    searchTerm,
    setSearchTerm,
    categoriesOptions,
    setSelectedCategory,
    filteredPosts,
    selectedCategory,
    order,
    setOrder,
    orderOptions,
  } = useFilterPosts({ currentItems, categoriesData });

  useEffect(() => {
    if (category) {
      setSelectedCategory(category as string);
    }
  }, [category]);

  return (
    <section>
      <div className="background-home h-[550px] w-full mt-[66px]" />
      <div className="px-8 mx-auto max-w-6xl relative -top-[10rem]">
        <div className="flex flex-wrap justify-between gap-4 mb-[40px]">
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col w-[267px] gap-2" id="blogs">
              <label className="text-white uppercase text-[0.875rem]">
                Category
              </label>
              <select
                className="px-2 py-3  border outline-none border-appGreen text-appBlack font-[500] text-[1rem]"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
              >
                <option value="">Select category</option>
                {categoriesOptions.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-[267px] gap-2">
              <label className="text-white uppercase  text-[0.875rem]">
                Order by:
              </label>
              <select
                className="px-2 py-3 text-base border outline-none border-appGreen text-appBlack font-[500] text-[1rem]"
                onChange={(e) => setOrder(e.target.value as any)}
                value={order}
              >
                {orderOptions.map((o, idx) => (
                  <option key={idx} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-80">
            <label className="text-white uppercase text-[0.875rem]">
              Search
            </label>
            <div className="flex justify-between w-full px-4 py-3 text-base bg-white border border-appGreen">
              <input
                className="w-full h-full outline-none text-appBlack  text-[1rem]"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                placeholder="Search posts"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-appBlack"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
        {filteredPosts?.length === 0 && (
          <div className="flex justify-center py-12 text-white">
            No results found.
          </div>
        )}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 justify-items-center sm:justify-items-start">
          {filteredPosts?.map((post, idx) => (
            <BlogItem key={idx} post={post} />
          ))}
        </div>
        {filteredPosts && filteredPosts?.length > 9 && (
          <div className="flex justify-center gap-4 mt-8">
            <PageItem
              onClick={prevPage}
              num={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              }
            />
            {Array.from(Array(totalPages).keys()).map((page) => (
              <PageItem
                key={page}
                num={page + 1}
                onClick={() => goToPage(page + 1)}
                currentPage={currentPage}
              />
            ))}
            <PageItem
              onClick={nextPage}
              num={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              }
            />
          </div>
        )}
      </div>
    </section>
  );
};

const PageItem = ({
  num,
  onClick,
  currentPage,
}: {
  num: any;
  onClick: () => void;
  currentPage?: number;
}) => {
  const isCurrentPage = currentPage === num;
  return (
    <div
      className={
        "flex items-center justify-center w-8 h-8 text-lg  border  cursor-pointer" +
        (isCurrentPage
          ? " bg-appGreen text-black border-appGreen"
          : " border-white text-white")
      }
      onClick={onClick}
    >
      {num}
    </div>
  );
};

export default PostsSection;

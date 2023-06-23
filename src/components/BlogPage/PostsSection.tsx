import { CategoriesAPIResponse } from "@/interfaces/CategoriesApi.interface";
import { LatestsPostsAPIResponse } from "@/interfaces/LatestsPostsApi.interface";
import React, { useState } from "react";
import BlogItem from "../BlogItem/BlogItem";
import usePagination from "@/hooks/usePagination";
import useFilterPosts from "@/hooks/useFilterPosts";

type Props = {
  postsData: LatestsPostsAPIResponse;
  categoriesData: CategoriesAPIResponse;
};
const PostsSection = ({ postsData, categoriesData }: Props) => {
  const posts = postsData?.data?.posts?.edges;

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
  } = useFilterPosts({ currentItems, categoriesData });

  return (
    <section>
      <div className="background-home h-[550px] w-full" />
      <div className="px-8 mx-auto max-w-6xl relative -top-[10rem]">
        <div className="flex flex-wrap justify-between gap-4 mb-8">
          <div className="flex flex-col w-48 gap-2">
            <label className="text-white uppercase">Category</label>
            <select
              className="px-2 py-3 border outline-none border-appGreen"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categoriesOptions.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 w-80">
            <label className="text-white uppercase">Search</label>
            <div className="flex justify-between w-full px-2 py-3 bg-white border border-appGreen">
              <input
                className="w-full h-full outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                placeholder="Search posts..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-black"
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
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 justify-items-center sm:justify-items-start">
          {filteredPosts?.map((post, idx) => (
            <BlogItem key={idx} post={post} />
          ))}
        </div>
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

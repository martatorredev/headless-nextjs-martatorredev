import { CategoriesAPIResponse } from "@/interfaces/CategoriesApi.interface";
import { LatestsPostsAPIResponse } from "@/interfaces/LatestsPostsApi.interface";
import React, { useState } from "react";

type Props = {
  currentItems: any[];
  categoriesData: CategoriesAPIResponse;
};

const useFilterPosts = ({ currentItems, categoriesData }: Props) => {
  const categoriesOptions = categoriesData.data.categories.edges.map(
    (cat) => cat.node.name
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredPostsBySearchTerm = currentItems?.filter((post) =>
    post.node.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  const filteredPosts =
    selectedCategory === ""
      ? filteredPostsBySearchTerm
      : filteredPostsBySearchTerm?.filter((post) =>
          post.node.categories.nodes.some(
            (cat: any) => cat.name === selectedCategory
          )
        );

  return {
    searchTerm,
    setSearchTerm,
    categoriesOptions,
    selectedCategory,
    setSelectedCategory,
    filteredPosts,
  };
};

export default useFilterPosts;

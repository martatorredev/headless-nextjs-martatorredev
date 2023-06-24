import { CategoriesAPIResponse } from "@/interfaces/CategoriesApi.interface";
import { LatestsPostsAPIResponse } from "@/interfaces/LatestsPostsApi.interface";
import React, { useState } from "react";

type Props = {
  currentItems: any[];
  categoriesData: CategoriesAPIResponse;
};

function ordenarPorFecha(arr: any[], order: "asc" | "desc") {
  if (order === "asc") {
    return arr.sort(
      (a: any, b: any) =>
        (new Date(b.node.date) as any) - (new Date(a.node.date) as any)
    );
  }
  if (order === "desc") {
    return arr.sort(
      (a: any, b: any) =>
        (new Date(a.node.date) as any) - (new Date(b.node.date) as any)
    );
  }
}

const orderOptions = [
  { value: "asc", label: "Newest first" },
  { value: "desc", label: "Oldest first" },
];

const useFilterPosts = ({ currentItems, categoriesData }: Props) => {
  const categoriesOptions = categoriesData.data.categories.edges.map(
    (cat) => cat.node.name
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [order, setOrder] = useState<"desc" | "asc">("asc");

  const filteredPostsByOrder = ordenarPorFecha(currentItems, order);

  const filteredPostsBySearchTerm = filteredPostsByOrder?.filter((post) =>
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
    order,
    setOrder,
    orderOptions,
  };
};

export default useFilterPosts;

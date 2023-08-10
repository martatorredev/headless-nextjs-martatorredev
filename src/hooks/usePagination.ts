import { useState } from "react";

type Props = {
  array: any[];
  itemsPerPage: number;
};

const usePagination = ({ array, itemsPerPage }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(array.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = array.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    nextPage,
    prevPage,
  };
};

export default usePagination;

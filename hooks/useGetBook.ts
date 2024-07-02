import { bookSearchApi } from "@/apis/naverBookApi";
import useSWR from "swr";

interface BooksType {
  display: number;
  items: bookItmes[];
  lastBuildDate: string;
  start: number;
  total: number;
}
interface bookItmes {
  author: string;
  description: string;
  discount: string;
  image: string;
  isbn: string;
  link: string;
  pubdate: string;
  publisher: string;
  title: string;
}

export const useGetBook = () => {
  const { data, isLoading, error } = useSWR<BooksType>(
    "/api/v1/search/book.json?query=코딩"
  );
  return {
    data,
    isLoading,
    error,
  };
};

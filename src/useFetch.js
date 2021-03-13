import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [bookslist, setBookList] = useState([]);
  const getBooks = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setBookList(products);
    setLoading(false);
  }, [url]);
  useEffect(() => {
    getBooks();
  }, [url, getBooks]);
  return { loading, bookslist };
};

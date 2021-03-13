import React, { useState, useRef } from "react";
import { useFetch } from "./useFetch";
import ReturnBooks from "./ReturnBooks.js";
const url =
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json";
function Search() {
  const { bookslist } = useFetch(url);
  const defaultResult = {
    books: [],
    booli: true,
  };
  const [result, setResult] = useState(defaultResult);
  const ref = useRef(null);

  //event handler
  const func = (e) => {
    e.preventDefault();
    if (ref.current.value) {
      var newlist = [];
      newlist = bookslist.filter(
        (info) =>
          info.title
            .toString()
            .toLowerCase()
            .includes(ref.current.value.toLowerCase()) && info.bookID !== 15321
      );
      if (newlist.length > 0) {
        setResult({ books: newlist, booli: true });
      } else {
        setResult({ books: [], booli: false });
      }
    } else {
      setResult({ books: [], booli: true });
    }
  };
  const { books, booli } = result;
  return (
    <>
      <div className="search">
        <form name="search" onSubmit={func}>
          <input
            id="searchvalue"
            type="text"
            placeholder="Enter book name"
            ref={ref}
          ></input>
        </form>
      </div>
      {books.length ? (
        <div className="count">
          <h4>{books.length} results found</h4>
        </div>
      ) : (
        <p></p>
      )}
      {booli ? <ReturnBooks data={books} /> : <h2>No Results found!</h2>}
    </>
  );
}
export default Search;

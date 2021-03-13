import React from "react";
import { useState, useContext } from "react";
import { Share } from "./Homepage";
const ReturnBooks = ({ data }) => {
  const { sendData } = useContext(Share);
  return (
    <div className="booklist">
      {data.map((info) => {
        return (
          <>
            <Box key={info.bookID} info={info} sendData={sendData} />
          </>
        );
      })}
    </div>
  );
};
export default ReturnBooks;

const Box = ({ info, sendData }) => {
  const { title, authors, price } = info;
  const [showButton, setShowButton] = useState(false);
  return (
    <div
      className="book"
      onMouseEnter={() => {
        setShowButton(true);
      }}
      onMouseLeave={() => setShowButton(false)}
    >
      <div className="booktitle">
        <h3>{title}</h3>
      </div>
      <div className="author">
        <h4 className="author">{authors}</h4>
      </div>
      <div className="priceandbutton">
        <h4 className="price">Price : $ {price}</h4>
        {showButton && (
          <button className="addtocart" onClick={() => sendData(info)}>
            + Cart
          </button>
        )}
      </div>
    </div>
  );
};

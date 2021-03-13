import React, { useContext } from "react";
import { Share } from "./Homepage";
const Cart = () => {
  const { cartItems, removeData, getData } = useContext(Share);
  return (
    <>
      {cartItems.length ? (
        <>
          <p style={{ textAlign: "center" }}>
            {cartItems.length} items in cart
          </p>
          <div className="booklist">
            {cartItems.map((book) => {
              return (
                <div className="book" key={book.bookID}>
                  <div className="booktitle">
                    <h3>{book.title}</h3>
                  </div>
                  <div className="author">
                    <h4 className="author">{book.authors}</h4>
                  </div>
                  <div className="priceandbutton">
                    <h4 className="price">Price : $ {book.price}</h4>
                    <button
                      className="addtocart"
                      onClick={() => {
                        removeData(book.bookID);
                        getData();
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <h3 style={{ textAlign: "center", fontWeight: "lighter" }}>
          No Items in cart
        </h3>
      )}
    </>
  );
};
export default Cart;

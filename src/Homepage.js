import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Cart from "./cart.js";
import Error from "./Error";
import Header from "./Header";
import Search from "./displaybooks.js";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
//Firebase Config code
var firebaseConfig = {
  apiKey: "AIzaSyDJFp2qll_RZlu6RhNVLS7Tepu9KENkuz0",
  authDomain: "book-search-2c198.firebaseapp.com",
  databaseURL: "https://book-search-2c198-default-rtdb.firebaseio.com",
  projectId: "book-search-2c198",
  storageBucket: "book-search-2c198.appspot.com",
  messagingSenderId: "831675918202",
  appId: "1:831675918202:web:f65daa4016370212abd8c3",
  measurementId: "G-LLCDVTMEXD",
};
firebase.initializeApp(firebaseConfig);
var AuthenticationProvider = new firebase.auth.GoogleAuthProvider();
export const Share = React.createContext();

//Main Function
const Homepage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    image: "",
    bool: false,
    userID: "",
  });
  //code for sign In
  const signIn = () => {
    firebase
      .auth()
      .signInWithPopup(AuthenticationProvider)
      .then((result) => {
        setUser({
          name: result.user.displayName,
          image: result.user.photoURL,
          email: result.user.email,
          userID: result.user.uid,
          bool: true,
        });
        return [user.bool, user.image];
      })
      .catch((error) => {
        /*// Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;*/
      });
  };

  //Send data to cart
  const sendData = (items) => {
    if (user.bool) {
      firebase
        .database()
        .ref("users/" + user.userID + "/itemsInCart/" + items.bookID.toString())
        .set(items);
    } else {
      alert("Login to add items to cart");
    }
  };

  //Remove data from Database
  const removeData = (items) => {
    if (user.bool) {
      firebase
        .database()
        .ref("users/" + user.userID + "/itemsInCart/")
        .child(items)
        .remove();
    }
  };

  //Get data from Database
  const getData = () => {
    if (user.bool) {
      var itemsincart = firebase
        .database()
        .ref("users/" + user.userID + "/itemsInCart");
      itemsincart.on(
        "value",
        (snapshot) => {
          if (snapshot.exists()) {
            var items = snapshot.val();
            setCartItems(Object.values(items));
          } else {
            setCartItems([]);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  };
  return (
    <Share.Provider
      value={{ user, signIn, sendData, cartItems, getData, removeData }}
    >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </Share.Provider>
  );
};
export default Homepage;

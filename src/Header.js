import cart from "./icons8-shopping-cart-64.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Share } from "./Homepage";
function Header() {
  const { signIn, user, getData } = useContext(Share);
  return (
    <>
      <div className="header">
        <Link className="title" to="/">
          <div>
            <h1>Books</h1>
          </div>
        </Link>
        {user.bool ? (
          <img className="userImage" src={user.image} alt={user.displayName} />
        ) : (
          <button className="cartbutton" onClick={signIn}>
            SignIn
          </button>
        )}
        <Link to="/cart" className="cartbutton" onClick={() => getData()}>
          <div>
            <img className="cart" src={cart} alt="cart" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;

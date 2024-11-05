import {
  FaSearch,
  FaRegUserCircle,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="px-2 border-bottom d-flex flex-wrap header-items">
        <div className="">
          <Link to="/" style={{ margin: "10px" }}>
            <img src="images/befashionista.png" alt="beHome" className="logo" />
          </Link>
        </div>
        <nav className="nav-bar">
          <a href="#">MEN</a>
          <a href="#">WOMEN</a>
          <a href="#">KIDS</a>
        </nav>
        <div className="search-bar">
          <span className="search-icon">
            <FaSearch />
          </span>
          <input
            className="search-input"
            placeholder="Search for products, brands and more"
          />
        </div>

        <div className="action-bar">
          <div className="action-container dropdown">
            <FaRegUserCircle
              className="reactIcon dropdown-toggle"
              data-mdb-toggle="dropdown"
            />
            <span className="action-name">Profile</span>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                {" "}
                Home
              </a>
              <a className="dropdown-item" href="#">
                {" "}
                Contact{" "}
              </a>
              <a className="dropdown-item" href="#">
                {" "}
                Notifications{" "}
              </a>
              <a className="dropdown-item" href="#">
                Setting{" "}
              </a>
            </div>
          </div>

          <div className="action-container">
            <FaHeart className="reactIcon" />
            <span className="action-name">Wishlist</span>
          </div>

          <Link to="/bag" className="action-container">
            <FaShoppingBag className="reactIcon" />
            <span className="action-name">Bag</span>
            <span className="bag-item-count ">1</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
//<span className="bag-item-count">1</span>

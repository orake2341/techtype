import NavbarCSS from "../../assets/HomeNavbar.module.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const Navbar = ({ isBarActive, isBarActiveHandler }) => {
  return (
    <header className={NavbarCSS["header"]} id="top">
      <nav className={NavbarCSS["nav-main"]}>
        <a href="#top">
          <h1 className={NavbarCSS["title"]}>
            {" "}
            <span className={NavbarCSS["span"]}>Tech</span> Type
          </h1>
        </a>
        <ul
          className={
            isBarActive
              ? `${NavbarCSS["nav-list"]} ${NavbarCSS["active"]}`
              : NavbarCSS["nav-list"]
          }
        >
          <li>
            <a className={NavbarCSS["nav-a"]} href="#gallery">
              Gallery
            </a>
          </li>

          <li>
            <a className={NavbarCSS["nav-a"]} href="#aboutUs">
              About us
            </a>
          </li>

          <li>
            <a className={NavbarCSS["nav-a"]} href="#contact">
              Contact
            </a>
          </li>

          <li>
            <a className={NavbarCSS["nav-a"]} href="login/login.html">
              Login
            </a>
          </li>
        </ul>
        {isBarActive ? (
          <FaTimes
            className={NavbarCSS["menu-btn-active"]}
            onClick={isBarActiveHandler}
          />
        ) : (
          <FaBars
            className={NavbarCSS["menu-btn"]}
            onClick={isBarActiveHandler}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;

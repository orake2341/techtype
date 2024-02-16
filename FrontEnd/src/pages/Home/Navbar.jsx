import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const Navbar = ({isBarActive, isBarActiveHandler}) => {
    return ( 
        <header className="" id="top">             
            <nav className="">
                <a href="#top">
                    <h1 className=""> <span className="">Tech</span> Type</h1>
                </a>
                <ul className={isBarActive ? "" : ""}>

                    <li><a className="" href="#gallery">Gallery</a></li>

                    <li><a className="" href="#aboutUs">About us</a></li>
                    
                    <li><a className="" href="#contact">Contact</a></li>

                    <li><a className="" href="login/login.html">Login</a></li>

                </ul>
                { isBarActive ?(
                    <FaTimes className="" onClick={isBarActiveHandler} />
                ):(
                    <FaBars className="" onClick={isBarActiveHandler} />
                )}
            </nav> 
        </header>
     );
}
 
export default Navbar;
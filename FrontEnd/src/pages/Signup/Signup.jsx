import { Link } from 'react-router-dom';
import { FaCircleInfo } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import logo from '../../assets/imgs/parallax/Sticker 3.png';
import sideImage from '../../assets/imgs/colorfulkeyboard.jpg';

const Signup = () => {
    return ( 
        <section className="">
            <figure className="">
                <img src={sideImage} width={458} alt="a keyboard"/>
            </figure>
            <div className="">
                <figure className="">
                    <img src={logo} width={300} alt="logo"/>
                </figure>
                <form className="" method="post">       
                    <h2 className="">Sign Up</h2>            
                    <div className="">         
                        <FaCircleInfo className=""/>                            
                        <input className="" type="text" name="fname" id="fname" placeholder='First Name' required/>                 
                    </div>
                    <div className=""> 
                        <FaCircleInfo className=""/>               
                        <input className="" type="text" name="lname" id="lname" placeholder='Last Name' required/>        
                    </div>
                    <div className=""> 
                        <MdOutlinePerson className=""/>               
                        <input className="" type="text" name="user" id="user" placeholder='Username' required/>        
                    </div>
                    <div className=""> 
                        <MdEmail className=""/>               
                        <input className="" type="email" name="email" id="email" placeholder='Email' required/>        
                    </div>
                    <div className=""> 
                        <RiLockPasswordFill className=""/>               
                        <input className="" type="password" name="pwd" id="pwd" placeholder='Password' required/>        
                    </div>
                    <div className=""> 
                        <RiLockPasswordFill className=""/>               
                        <input className="" type="password" name="conpwd" id="conpwd" placeholder='Confirm Password' required/>        
                    </div>
                    <div className=""> 
                        <BsFillTelephoneFill className=""/>               
                        <input className="" type="tel" name="contact" id="contact" placeholder='Contact' required/>        
                    </div>
                    <input className="" type="submit" name="submit" value="Sign up"/>
                    <div className="">
                        <p className="">Already have a account? <Link className="" to="/login">Register</Link></p>
                    </div>    
                </form>
            </div>
        </section>
     );
}
 
export default Signup;
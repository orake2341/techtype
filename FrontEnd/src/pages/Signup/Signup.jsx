import { Link } from 'react-router-dom';
import { FaCircleInfo } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import SignupCSS from '../../assets/signup.module.css';
import logo from '../../assets/imgs/parallax/Sticker 3.png';
import sideImage from '../../assets/imgs/colorfulkeyboard.jpg';

const Signup = () => {
    return ( 
        <section className={SignupCSS['section']}>
            <figure className={SignupCSS['side-image']}>
                <img src={sideImage} width={458} alt="a keyboard"/>
            </figure>
            <div className={SignupCSS['login-form-box']}>
                <figure className={SignupCSS['logo']}>
                    <img src={logo} width={300} alt="logo"/>
                </figure>
                <form className={SignupCSS['form']} method="post">       
                    <h2 className={SignupCSS['form-title']}>Sign Up</h2>            
                    <div className={SignupCSS['inputbox']}>         
                        <FaCircleInfo className={`${SignupCSS['icon']}`}/>                            
                        <input className={SignupCSS['input']} type="text" name="fname" id="fname" placeholder='First Name' required/>                 
                    </div>
                    <div className={SignupCSS['inputbox']}> 
                        <FaCircleInfo className={`${SignupCSS['icon']}`}/>               
                        <input className={SignupCSS['input']} type="text" name="lname" id="lname" placeholder='Last Name' required/>        
                    </div>
                    <div className={SignupCSS['inputbox']}> 
                        <MdOutlinePerson className={`${SignupCSS['icon']}`}/>               
                        <input className={SignupCSS['input']} type="text" name="user" id="user" placeholder='Username' required/>        
                    </div>
                    <div className={SignupCSS['inputbox']}> 
                        <MdEmail className={`${SignupCSS['icon']}`}/>               
                        <input className={SignupCSS['input']} type="email" name="email" id="email" placeholder='Email' required/>        
                    </div>
                    <div className={SignupCSS['inputbox']}> 
                        <RiLockPasswordFill className={`${SignupCSS['icon']}`}/>               
                        <input className={SignupCSS['input']} type="password" name="pwd" id="pwd" placeholder='Password' required/>        
                    </div>
                    <div className={SignupCSS['inputbox']}> 
                        <RiLockPasswordFill className={`${SignupCSS['icon']}`}/>               
                        <input className={SignupCSS['input']} type="password" name="conpwd" id="conpwd" placeholder='Confirm Password' required/>        
                    </div>
                    <div className={SignupCSS['inputbox']}> 
                        <BsFillTelephoneFill className={`${SignupCSS['icon']}`}/>               
                        <input className={SignupCSS['input']} type="tel" name="contact" id="contact" placeholder='Contact' required/>        
                    </div>
                    <input className={SignupCSS['button']} type="submit" name="submit" value="Sign up"/>
                    <div className={SignupCSS['signup']}>
                        <p className={SignupCSS['p']}>Already have a account? <Link className={SignupCSS['a']} to="/login">Register</Link></p>
                    </div>    
                </form>
            </div>
        </section>
     );
}
 
export default Signup;
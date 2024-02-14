import { MdOutlinePerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import LoginCSS from '../../assets/login.module.css';


const Login = () => {
    return ( 
        <section className={LoginCSS['section']}>
            <div className={LoginCSS['login-form-box']}>
                <h2 className={LoginCSS['form-title']}>Login</h2>
                    <form  method="post">                   
                        <div className={LoginCSS['inputbox']}>
                            <span className={LoginCSS['validation-msg']} id="errorMsg1"></span>
                            <MdOutlinePerson className={LoginCSS['icon']}/>
                            <input className={LoginCSS['input']} type="text" name="Luser" id="Luser" required/>
                            <label className={LoginCSS['label']} for="Luser" >Username</label>
                        </div>
                        <div className={LoginCSS['inputbox']}>
                            <RiLockPasswordFill className={LoginCSS['icon']}/>
                            <input className={LoginCSS['input']} type="password" name="Lpwd" id="Lpwd" required/>
                            <label className={LoginCSS['label']} for="Lpwd" >Password</label>
                        </div>
                        <button className={LoginCSS['button']} type="submit" name="submit">Log in</button>
                        <div className={LoginCSS['signup']}>
                            <p className={LoginCSS['p']}>Don't have a account <Link className={LoginCSS['a']} to="/signup">Register</Link></p>
                        </div>    
                    </form>
            </div>
        </section>
    );
}
 
export default Login;
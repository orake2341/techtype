import { Link } from 'react-router-dom';
import { IoMdEyeOff } from "react-icons/io";
import SignupCSS from '../../assets/signup.module.css';

const Signup = () => {
    return ( 
        <section className={SignupCSS['section']}>
            <div className={SignupCSS['container']}>
            <h2 className={SignupCSS['form-title']}>Registration</h2>
            <form className={SignupCSS['form']} method="post">
                <div className={SignupCSS['main-user-info']}>       
                    <div className={SignupCSS['user-input-box']}>
                        <input className={SignupCSS['input']} type="text" name="Rf_name" id="Rf_name" required/>
                        <label className={SignupCSS['label']} for="Rf_name">First Name</label> 
                    </div>
                    <div className={SignupCSS['user-input-box']}>
                        <input className={SignupCSS['input']} type="text" name="Rm_name" id="Rm_name" required/>
                        <label className={SignupCSS['label']}  for="Rm_name">Middle Name</label> 
                    </div>
                    <div className={SignupCSS['user-input-box']}>
                        <input className={SignupCSS['input']} type="text" name="Rl_name" id="Rl_name" required/>
                        <label className={SignupCSS['label']}  for="Rl_name">Last Name</label> 
                    </div> 
                    <div className={SignupCSS['user-input-box']}>
                        <input className={SignupCSS['input']} type="text" name="Raddr_name" id="Raddr_name" required/>
                        <label className={SignupCSS['label']}  for="Raddr_name">Address</label> 
                    </div> 
                    <div className={SignupCSS['user-input-box']}>
                        <input className={SignupCSS['input']} type="text" name="Remail" id="Remail" required/>
                        <label className={SignupCSS['label']}  for="Remail">Email</label> 
                        <span className={SignupCSS['validation-msg']} id="errorMsg1"></span>
                    </div>
                    <div className={SignupCSS['user-input-box']}>
                        <input className={SignupCSS['input']} type="text" name="Ruser" id="Ruser" required/>
                        <label className={SignupCSS['label']}  for="Ruser">Username</label>
                        <span className={SignupCSS['validation-msg']} id="errorMsg2"></span>
                    </div>
                    <div className={SignupCSS['user-input-box']}>
                        <span className={SignupCSS['validation-msg']}></span>
                        <IoMdEyeOff className={SignupCSS['icon']} id="eyeicon"/>
                        <input className={SignupCSS['input']} type="password" name="Rpass" id="Rpass" required/>   
                        <label className={SignupCSS['label']}  for="Rpass">Password</label>
                        
                    </div>
                    <div className={SignupCSS['user-input-box']}>
                        <input className={SignupCSS['input']} type="password" name="Rrepeatpass" id="Rrepeatpass" required/>
                        <label className={SignupCSS['label']}  for="Rrepeatpass">Repeat Password</label>
                        <span className={SignupCSS['validation-msg']} id="errorMsg3"></span>
                    </div>
                    <div className={SignupCSS['user-input-box']}>
                        <input className={SignupCSS['input']} type="text" name="Rcontact" id="Rcontact" required/>
                        <label className={SignupCSS['label']}  for="Rcontact">Contact</label>
                        <span className={SignupCSS['validation-msg']} id="errorMsg4"></span>
                    </div>           
                </div>
                <div className={SignupCSS['form-submit-btn']}>
                    <input className={SignupCSS['input']} type="submit" name="submit" value="Register"/>
                </div>
                <div className={SignupCSS['register']}>  
                    <p className={SignupCSS['p']}>Already have account? <Link className={SignupCSS['a']} to="/login">Log in</Link></p>
                </div>
            </form>
        </div>
        </section>
     );
}
 
export default Signup;
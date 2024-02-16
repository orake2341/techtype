import { MdOutlinePerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdCheckBox } from "react-icons/md";
import LoginCSS from "../../assets/login.module.css";
import logo from "../../assets/imgs/parallax/Sticker 3.png";
import sideImage from "../../assets/imgs/colorfulkeyboard.jpg";

const Login = () => {
  return (
    <section className={LoginCSS["section"]}>
      <figure className={LoginCSS["side-image"]}>
        <img src={sideImage} width={458} alt="a keyboard" />
      </figure>
      <div className={LoginCSS["login-form-box"]}>
        <figure className={LoginCSS["logo"]}>
          <img src={logo} width={300} alt="logo" />
        </figure>
        <form className={LoginCSS["form"]} method="post">
          <h2 className={LoginCSS["form-title"]}>Login</h2>
          <label className={LoginCSS["label"]} htmlFor="Luser">
            Username
          </label>
          <div className={LoginCSS["inputbox"]}>
            <MdOutlinePerson
              className={`${LoginCSS["icon"]} ${LoginCSS["start"]}`}
            />
            <input
              className={LoginCSS["input"]}
              type="text"
              name="Luser"
              id="Luser"
              required
            />
          </div>
          <label className={LoginCSS["label"]} htmlFor="Lpwd">
            Password
          </label>
          <div className={LoginCSS["inputbox"]}>
            <RiLockPasswordFill
              className={`${LoginCSS["icon"]} ${LoginCSS["start"]}`}
            />
            <input
              className={LoginCSS["input"]}
              type="password"
              name="Lpwd"
              id="Lpwd"
              required
            />
            <FaEye className={`${LoginCSS["icon"]} ${LoginCSS["end"]}`} />
          </div>
          <div className={LoginCSS["remember"]}>
            <MdCheckBox />
            <p>Remember me</p>
          </div>
          <input
            className={LoginCSS["button"]}
            type="submit"
            name="submit"
            value="Log in"
          />
          <div className={LoginCSS["signup"]}>
            <p className={LoginCSS["p"]}>
              Don&apost have a account?{" "}
              <Link className={LoginCSS["a"]} to="/signup">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

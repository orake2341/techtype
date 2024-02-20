import logo from "../../assets/imgs/parallax/Sticker 3.png";
import sideImage from "../../assets/imgs/colorfulkeyboard.jpg";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <section className="flex bg-gradient-to-r from-white to-gray-300">
      <figure className="w-1/5">
        <img className="h-screen" src={sideImage} width={458} alt="a keyboard" />
      </figure>
      <div className="w-4/5 flex flex-col justify-center items-center">
        <figure className="">
          <img src={logo} width={300} alt="logo" />
        </figure>
        <SignupForm/>
      </div>
    </section>
  );
};

export default Signup;

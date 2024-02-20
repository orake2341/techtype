import { Link } from "react-router-dom";
import { FaCircleInfo } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const SignupForm = () => {
    return ( 
        <form className="bg-gray-300 p-6 flex flex-col items-center rounded-2xl gap-y-5" method="post">
          <h2 className="">Sign Up</h2>
          <div className="flex flex-row items-center self-start w-full">
            <FaCircleInfo className="" />
            <input
              className="flex-grow"
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              required
            />
          </div>
          <div className="flex flex-row items-center self-start w-full">
            <FaCircleInfo className="" />
            <input
              className="flex-grow"
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="flex flex-row items-center self-start w-full">
            <MdOutlinePerson className="" />
            <input
              className="flex-grow"
              type="text"
              name="user"
              id="user"
              placeholder="Username"
              required
            />
          </div>
          <div className="flex flex-row items-center self-start w-full">
            <MdEmail className="" />
            <input
              className="flex-grow"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex flex-row items-center self-start w-full">
            <RiLockPasswordFill className="" />
            <input
              className="flex-grow"
              type="password"
              name="pwd"
              id="pwd"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex flex-row items-center self-start w-full">
            <RiLockPasswordFill className="" />
            <input
              className="flex-grow"
              type="password"
              name="conpwd"
              id="conpwd"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="flex flex-row items-center self-start w-full">
            <BsFillTelephoneFill className="" />
            <input
              className="flex-grow"
              type="tel"
              name="contact"
              id="contact"
              placeholder="Contact"
              required
            />
          </div>
          <input className="bg-CACACAC hover:bg-opacity-75 opacity-100 text-black font-bold rounded-full py-3 px-6" type="submit" name="submit" value="Sign up" />
          <div className="">
            <p className="">
              Already have a account?{" "}
              <Link className="" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
     );
}
 
export default SignupForm;
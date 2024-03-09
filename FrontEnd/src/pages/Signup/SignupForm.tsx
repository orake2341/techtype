import { Link, useNavigate } from "react-router-dom";
import { FaCircleInfo } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCredentials } from "../../slices/authSlice";

import axios from "axios";
const SignupForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    password2: "",
    phoneNo: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: any) => state.auth);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/user/signup", {
        // TODO: PUT NAMES AND ALL USER INFO
        email: data.email,
        firstname: data.firstName,
        lastname: data.lastName,
        username: data.username,
        password2: data.password2,
        number: data.phoneNo,
        password: data.password,
      });
      dispatch(setCredentials({ ...response }));
      navigate("/");
      //
    } catch (error: any) {
      // TODO: ERROR HANDLING
      if (error.response) {
        console.log("Server Error:", error.response.data);
        setError(error.response.data.error || "Server Error");
        //
      } else if (error.request) {
        console.log("Network Error:", error.request);
        setError("Network Error");
        //
      } else {
        console.log("Error:", error.message);
        setError("Error");
      }
      //
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-gray-300 p-6 flex flex-col items-center rounded-2xl gap-y-5"
      method="post"
      onSubmit={handleSubmit}
    >
      <h2 className="">Sign Up</h2>
      <div className="flex flex-row items-center self-start w-full">
        <FaCircleInfo className="" />
        <input
          className="flex-grow"
          type="text"
          name="fname"
          id="fname"
          placeholder="First Name"
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
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
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
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
          onChange={(e) => setData({ ...data, username: e.target.value })}
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
          onChange={(e) => setData({ ...data, email: e.target.value })}
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
          onChange={(e) => setData({ ...data, password: e.target.value })}
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
          onChange={(e) => setData({ ...data, password2: e.target.value })}
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
          onChange={(e) => setData({ ...data, phoneNo: e.target.value })}
          required
        />
      </div>
      <input
        className="bg-CACACAC hover:bg-opacity-75 opacity-100 text-black font-bold rounded-full py-3 px-6"
        type="submit"
        name="submit"
        value="Sign up"
      />

      {error && <div className="text-red-500">{error}</div>}

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
};

export default SignupForm;

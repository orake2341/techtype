import { Link } from "react-router-dom";
import { FaCircleInfo } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
const SignupForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/user/signup", {
        email: data.email,
        password: data.password,
      });

      console.log("Response:", response.data);

      //
    } catch (error) {
      // MISSING ERROR HANDLING
      setError(error.response?.data?.message);

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

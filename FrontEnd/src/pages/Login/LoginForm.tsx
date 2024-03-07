import { MdOutlinePerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdCheckBox } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";
const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state: any) => state.auth);
  const [error, setError] = useState("");

  useEffect(() => {
    if (userInfo) {
      navigate("/customerportal");
    }
  }, [navigate, userInfo]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await login({
        email: data.email,
        password: data.password,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/customerPortal");
    } catch (error: any) {
      console.log(error);

      setError(error.data.error);
    }
  };
  return (
    <form
      className="bg-gray-300 p-6 flex flex-col items-center rounded-2xl gap-y-5"
      method="post"
      onSubmit={handleSubmit}
    >
      <h2 className="">Login</h2>
      <div className="flex flex-col items-center self-start w-full">
        <label className="" htmlFor="Luser">
          Username
        </label>
        <div className="flex flex-row self-start w-full items-center">
          <MdOutlinePerson className="" />
          <input
            className="flex-grow"
            type="text"
            name="Luser"
            id="Luser"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="flex flex-col items-center self-start w-full ">
        <label className="" htmlFor="Lpwd">
          Password
        </label>
        <div className="flex flex-row self-start w-full items-center">
          <RiLockPasswordFill className="" />
          <div className="flex flex-col w-full justify-center">
            <input
              className="flex-grow"
              type="password"
              name="Lpwd"
              id="Lpwd"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
            <FaEye className="absolute self-end" />
          </div>
        </div>
      </div>
      <div className="flex flex-row self-start items-center">
        <MdCheckBox />
        <p>Remember me</p>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <input
        className="bg-CACACAC hover:bg-opacity-75 opacity-100 text-black font-bold rounded-full py-3 px-6 "
        type="submit"
        name="submit"
        value="Log in"
      />
      <div className="">
        <p className="">
          Dont have a account?{" "}
          <Link className="" to="/signup">
            Signup
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;

import { Link } from "react-router-dom";
import { logout } from "../../slices/authSlice";
import { useLogoutMutation } from "../../slices/userApiSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type NavigationProps = {
  visible: boolean;
};

const Navigation = ({ visible }: NavigationProps) => {
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAction = async () => {
    await logoutApiCall("").unwrap();
    dispatch(logout(""));
    navigate("/login");
  };

  return (
    <>
      <nav
        className={
          !visible
            ? ""
            : "flex flex-col w-1/6 h-screen bg-gradient-to-b from-white to-gray-300 items-center justify-between"
        }
      >
        <div className="flex flex-col items-center gap-y-4 pt-8">
          <Link
            to="joborder"
            className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full"
          >
            Job Order
          </Link>
          <Link
            to="paymenthistory"
            className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full"
          >
            Payment History
          </Link>
          <Link
            to="settings"
            className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full"
          >
            Settings
          </Link>
        </div>
        <div className="pb-8">
          <button
            className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full"
            onClick={logoutAction}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

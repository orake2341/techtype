import { Link } from "react-router-dom";
import img from "../../assets/imgs/member4.jpg";

const Navigation = () => {
  return (
    <>
      <nav className="flex flex-col w-1/6 h-screen bg-gradient-to-b from-white to-CCCCCCC items-center gap-y-4">
        <figure className="flex flex-col h-1/4 w-full items-center justify-center">
        </figure>

        <div className="flex flex-col h-3/4 w-full items-center gap-y-96">
          <div className="flex flex-col items-center gap-y-4">
            <Link
              to="joborder"
              className="bg-white hover:bg-CACACAC text-black font-bold py-2 px-4 rounded-full"
            >
              Job Order
            </Link>
            <Link
              to="paymenthistory"
              className="bg-white hover:bg-CACACAC text-black font-bold py-2 px-4 rounded-full"
            >
              Payment History
            </Link>
            <Link
              to="settings"
              className="bg-white hover:bg-CACACAC text-black font-bold py-2 px-4 rounded-full"
            >
              Settings
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="bg-white hover:bg-CACACAC text-black font-bold py-2 px-4 rounded-full"
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

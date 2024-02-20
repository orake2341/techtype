import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Navigation></Navigation>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;

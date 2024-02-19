import Navigation from "./Navigation";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Portal = () => {
  const [navVisible, showNavbar] = useState(true);
  return (
    <>
      <div className="flex">
        <Navigation visible={navVisible}></Navigation>
        <Outlet />
      </div>
    </>
  );
};

export default Portal;

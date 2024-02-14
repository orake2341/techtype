import Navigation from "./Navigation";
import React, {useState} from 'react';
import { Outlet } from "react-router-dom";

const Portal = () => {
    const [navVisible, showNavbar] = useState(true);
    return (  
        <>
            <Navigation visible={ navVisible } show={ showNavbar }></Navigation>
            <Outlet visible={ navVisible }/>
        </>          
    );
}
 
export default Portal;
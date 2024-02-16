import Navigation from "./Navigation";
import React, {useState} from 'react';
import { Outlet } from "react-router-dom";

const Portal = () => {
    const [navVisible, showNavbar] = useState(true);
    return (  
        <>
            <div className="flex">
                <Navigation visible={ navVisible } show={ showNavbar }></Navigation>
                <Outlet visible={ navVisible }/>
            </div>
            
        </>          
    );
}
 
export default Portal;
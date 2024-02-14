import HomeCSS from '../../assets/home.module.css'
import { useState } from "react";
import Navbar from "./Navbar";
import Hero from './Hero';
import Gallery from './Gallery';

const Home = () => {
    const [isBarActive, setIsBarActive] = useState(false);

    const isBarActiveHandler = () => {
        if(!isBarActive){
            setIsBarActive(true);
        } else{
            setIsBarActive(false);
        }
    }


    return ( 
        <>
        <Navbar isBarActive={isBarActive} isBarActiveHandler={isBarActiveHandler}/>
        <main>
            <Hero/>
            <Gallery/>
        </main>
        </>
     );
}
 
export default Home;
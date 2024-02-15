import { Link } from 'react-router-dom';
import img from '../../assets/imgs/member4.jpg'
import NavigationCSS from '../../assets/Navigation.module.css';

const Navigation = ({visible, show}) => {
    return ( 
        <>
            <nav className={!visible ? `${NavigationCSS['navbar']}` : ''}>     
                <figure>
                    <img src={img}  width="150" alt="a profile"/>
                </figure>     
                <ul>
                    <li><Link to="joborder" className={`${NavigationCSS['link']}`}>Job Order</Link></li>
                    <li><Link to="paymenthistory" className={`${NavigationCSS['link']}`}>Payment History</Link></li>
                    <li><Link to="settings" className={`${NavigationCSS['link']}`}>Settings</Link></li>
                    <li className={`${NavigationCSS['end']}`}><Link to="/" className={`${NavigationCSS['link']} `}>Logout</Link></li>
                </ul>          
            </nav>
        </>      
     );
}
 
export default Navigation;
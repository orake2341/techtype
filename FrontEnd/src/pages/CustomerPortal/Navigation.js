import { Link } from 'react-router-dom';
import img from '../../assets/imgs/member4.jpg'
import NavigationCSS from '../../assets/Navigation.module.css';

const Navigation = ({visible, show}) => {
    return ( 
        <>
            <nav className={!visible ? `${NavigationCSS['navbar']}` : ''}>     
                <figure>
                    <img src={img} alt="a profile"/>
                </figure>
                <Link to="/joborder">Job Order</Link>
                <Link to="/payment history">Payment History</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/home">Logout</Link>
                
            </nav>
        </>      
     );
}
 
export default Navigation;
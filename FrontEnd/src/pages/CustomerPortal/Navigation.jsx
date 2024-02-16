import { Link } from 'react-router-dom';
import img from '../../assets/imgs/member4.jpg'


const Navigation = ({visible, show}) => {
    return ( 
        <>
            <nav className={!visible ? '' : 'flex flex-col w-1/6 h-screen bg-gradient-to-b from-white to-gray-400'}>
                     
                <figure>
                    <img src={img}  width="150" alt="a profile"/>
                </figure>     
                <h3>Mark Angelo P. Baes</h3>
                <ul>
                    <li><Link to="joborder" className="">Job Order</Link></li>
                    <li><Link to="paymenthistory" className="">Payment History</Link></li>
                    <li><Link to="settings" className="">Settings</Link></li>
                    <li className=""><Link to="/" className="">Logout</Link></li>
                </ul>          
            </nav>
        </>      
     );
}
 
export default Navigation;
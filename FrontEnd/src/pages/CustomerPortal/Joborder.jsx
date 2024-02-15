import JoborderCSS from '../../assets/Joborder.module.css';
import { FaEye } from "react-icons/fa";


const Joborder = ({ visible }) => {
    
    return (  
        <section className={`${JoborderCSS['section']}`}>
            <h1>JobOrder</h1>        
            <div className={`${JoborderCSS['app-container']}`}>
                <button className={`${JoborderCSS['button']}`}>New Job Order</button>
                <table>
                    <thead>
                        <tr>
                            <th>JO#</th>
                            <th>JO Status</th>
                            <th>Payment Status</th>
                            <th>Due Date</th>
                            <th>Job Location</th>
                            <th>Details</th>
                        </tr>
                        <tr>
                            <td>JO-00000002</td>
                            <td>Started</td>
                            <td>Pending</td>
                            <td>09/02/2024</td>
                            <td>Davao</td>
                            <td><FaEye /></td>
                        </tr>
                    </thead>
                </table>
            </div>
            
        </section>
    );
}
 
export default Joborder;
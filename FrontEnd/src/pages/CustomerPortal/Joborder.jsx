import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import Modal from '../../components/modal';

const Joborder = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleDetailsClick = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (  
        <section className="flex w-5/6 h-screen bg-green-200 ">
            <h1>JobOrder</h1>        
            <div className="">
                <button className="">New Job Order</button>
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
                    </thead>
                    <tbody>
                        <tr>
                            <td>JO-00000002</td>
                            <td>Started</td>
                            <td>Pending</td>
                            <td>09/02/2024</td>
                            <td>Davao</td>
                            <td><FaEye onClick={handleDetailsClick} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Modal isOpen={modalVisible} onClose={handleCloseModal} />
        </section>
    );
}

export default Joborder;

import PaymentHistoryCSS from '../../assets/Payment.module.css';

const PaymentHistory = ({ visible }) => {
    return ( 
        <section className={`${PaymentHistoryCSS['section']}`}>           
            <h1>Payment History</h1>
        </section>
     );
}
 
export default PaymentHistory;
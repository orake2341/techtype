import JoborderCSS from '../../assets/Joborder.module.css';

const Joborder = ({ visible }) => {
    
    return (  
        <>
            <div className={!visible ? `${JoborderCSS['page']}` : `${JoborderCSS['page']} ${JoborderCSS['page-with-navbar']}`}>
                <h1>hello</h1>
            </div>
        </>
    );
}
 
export default Joborder;
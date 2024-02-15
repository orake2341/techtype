import SettingsCSS from '../../assets/Settings.module.css';

const Settings = ({ visible }) => {
    return ( 
        <section className={`${SettingsCSS['section']}`}>          
            <h1>Settings</h1>
        </section>
     );
}
 
export default Settings;
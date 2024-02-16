import sideImage from '../../assets/imgs/colorfulkeyboard.jpg'
import logo from '../../assets/imgs/parallax/Sticker 3.png'
import LoginForm from './LoginForm';


const Login = () => {
    return ( 
        <section className="flex bg-gradient-to-r from-white to-gray-300 ...">
            <figure className='w-1/5'>
                <img className="h-screen" src={sideImage} alt="a keyboard"/>
            </figure>
            <div className="w-4/5 flex flex-col justify-center items-center">
                <figure className="">
                    <img src={logo} width={300} alt="logo"/>
                </figure>
                <LoginForm/>
            </div>
        </section>
    );
}
 
export default Login;
import Background from '../components/register-login/Background'
import FormsContainer from '../components/register-login/FormsContainer'

const Login = ({setLoggedIn}) => {
    return (
        <div className='bg-black text-white min-h-screen w-full flex items-center justify-center'>
            <FormsContainer heading={'Login'} form={'login'} setLoggedIn={setLoggedIn} />
            <Background link={'/register'} text={'Dont have an Account ?'} icon={'Register'} />
        </div>
    )
}

export default Login

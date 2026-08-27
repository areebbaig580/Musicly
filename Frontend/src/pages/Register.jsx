import Background from "../components/register-login/Background"
import FormsContainer from "../components/register-login/FormsContainer"


const Register = ({setLoggedIn}) => {
    return (

        <div className='bg-black text-white min-h-screen w-full flex items-center justify-center' >
            <FormsContainer heading={'Signup'} form={'Form'} setLoggedIn={setLoggedIn}/>
            <Background link={'/login'} text={'Already have an Account ?'} icon={'Login'}/>
        </div>
    )
}

export default Register

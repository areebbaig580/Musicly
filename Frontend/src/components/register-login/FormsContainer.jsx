import { Music } from "lucide-react"
import Form from "./Form"
import LoginForm from "./LoginForm"
import Redirect from "./Redirect"


const FormsContainer = ({ heading, form }) => {
    return (
        <div className="w-full md:w-3/10 h-full flex flex-col items-center md:justify-evenly gap-5 relative">
            <div className='flex items-center gap-1 font-bold my-15 md:my-0 text-[#1db954] md:text-white text-5xl md:text-7xl'><Music className="size-12 md:size-[60px]"/>Musicly</div>
            <div className="flex flex-col items-center gap-2 mb-5 md:mb-0">

                <div className="font-semibold text-2xl">{heading}</div>
                <div className="text-[#a4a4a4] font-semibold">Your soundtrack starts here.</div>
            </div>
           
            {form === 'Form' && <Form />}
            {form === 'login' && <LoginForm />}
            <Redirect text={heading==='Login'?'Dont have an Account ?':'Already have an account ?'} link={heading==='Login'?'/register':'/'} icon={heading==='Login'?'Sign Up':'Sign in'}/>
        </div>
    )
}

export default FormsContainer

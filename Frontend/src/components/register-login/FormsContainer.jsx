import { Music } from "lucide-react"
import Form from "./Form"
import LoginForm from "./LoginForm"


const FormsContainer = ({ heading, form }) => {
    return (
        <div className="w-3/10 h-full flex flex-col items-center justify-evenly gap-5">
            <div className='flex items-center gap-1 font-bold text-7xl'><Music size={70} />Musicly</div>
            <div className="flex flex-col items-center gap-2">

                <div className="font-semibold text-2xl">{heading}</div>
                <div className="text-[#a4a4a4] font-semibold">Your soundtrack starts here.</div>
            </div>
            { form==='Form' && <Form />}
            { form==='login' && <LoginForm/>}
                
        </div>
    )
}

export default FormsContainer

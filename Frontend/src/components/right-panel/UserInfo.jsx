import { EllipsisVertical } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const UserInfo = () => {
    const boxRef = useRef();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (open === false) {
            boxRef.current.style.display = "flex"
            boxRef.current.style.flexDirection = "column"
            setOpen(true)
        } else if (open === true) {
            boxRef.current.style.display = "none"
            setOpen(false)
        }
    }

    return (
        <div className='w-full h-fit md:flex md:justify-end justify-between items-center gap-2 md:px-10 px-2 hidden'>
            <div>Hello, Areeb baig</div>
            <div className='cursor-pointer' onClick={handleClick}><EllipsisVertical size={20} /></div>
            <div className='h-fit w-fit bg-[#212121] absolute top-10 right-5 px-4 py-2 rounded-lg hidden ' ref={boxRef}>
                <Link to={"/register"} className='cursor-pointer hover:text-[#1db954]'>Register</Link>
                <Link to={"/login"} className='cursor-pointer hover:text-[#1db954]'>Login</Link>
                <div className='cursor-pointer hover:text-red-500'>Logout</div>
            </div>

        </div>
    )
}

export default UserInfo

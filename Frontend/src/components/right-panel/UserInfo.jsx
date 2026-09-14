import { EllipsisVertical } from 'lucide-react'
import {  useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const UserInfo = () => {
    const boxRef = useRef();
    const [open, setOpen] = useState(false);
    const [userName , setUsername] = useState('');
    useEffect(()=>{
        const username = JSON.parse(localStorage.getItem('userInfo')).user.username;
        setUsername(username);
    },[])
    
    
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
        <div className='w-full h-fit md:flex justify-between items-center gap-2 md:px-0 px-2 hidden'>
            <div className='grow flex justify-center items-center gap-2'>
                <div className='text-[0.9rem] text-[#cdcdcd]'>Search</div>
                <input type="text" className='w-4/10 px-4 py-1 rounded-2xl bg-[#212121] outline-none' placeholder='Search Music'/>
            </div>
            <div className='flex items-center gap-2'>
                <div className='text-[0.9rem] text-[#cdcdcd]'>Goodevening,</div>
                <div className='capitalize'>{userName}</div>
                <div className='cursor-pointer' onClick={handleClick}><EllipsisVertical size={20} /></div>
                <div className='h-fit w-fit bg-[#212121] absolute top-10 right-5 px-4 py-2 rounded-lg hidden z-50' ref={boxRef}>
                    <Link to={"/register"} className='cursor-pointer hover:text-[#1db954]'>Register</Link>
                    <Link to={"/login"} className='cursor-pointer hover:text-[#1db954]'>Login</Link>
                    <div className='cursor-pointer hover:text-red-500'>Logout</div>
                </div>
            </div>

        </div>
    )
}

export default UserInfo

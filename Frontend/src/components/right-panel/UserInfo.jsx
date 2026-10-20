import { EllipsisVertical } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from '../search/SearchBar';
import axios from 'axios';

const UserInfo = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    const boxRef = useRef();
    const [open, setOpen] = useState(false);
    const [userName, setUsername] = useState('');
    useEffect(() => {
        const username = JSON.parse(localStorage.getItem('userInfo')).user.username;
        setUsername(username);
    }, [])
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

    const handleLogout = () => {
        axios.post(`${apiUrl}/api/auth/logout`,{
             withCredentials: true,
        }).then((res)=>{
            alert('Logged out succesfully');
            navigate('/');
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className='w-full h-fit flex justify-between items-center gap-2 md:px-0 px-2 '>
            <SearchBar />
            <div className='md:flex items-center gap-2 hidden'>
                <div className='capitalize'>{userName}</div>
                <div className='cursor-pointer' onClick={handleClick}><EllipsisVertical size={20} /></div>
                <div className='h-fit w-fit bg-[#212121] absolute top-10 right-5 px-4 py-2 rounded-lg hidden z-50' ref={boxRef}>
                    <Link to={"/register"} className='cursor-pointer hover:text-[#1db954]'>Register</Link>
                    <Link to={"/"} className='cursor-pointer hover:text-[#1db954]'>Login</Link>
                    <div className='cursor-pointer hover:text-red-500' onClick={handleLogout}>Logout</div>
                </div>
            </div>

        </div>
    )
}

export default UserInfo

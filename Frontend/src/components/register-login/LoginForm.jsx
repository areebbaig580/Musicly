import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [loginWith, setLoginWith] = useState('username');
    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();

        const formData =  new FormData(e.target);
        const data = Object.fromEntries(formData)

        axios.post("http://localhost:3000/api/auth/login", data, {
            withCredentials: true
        })
         .then((res) => {
                alert("Logged in succecfully")
                console.log(res)
                e.target.reset();
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <form className='h-[55vh] w-full flex flex-col gap-5 items-center ' onSubmit={loginUser}>
            <div className='flex justify-between w-8/10 px-2'>
                <div className='font-semibold'>Login Using</div>
                <div className='flex gap-2'>
                    <div onClick={() => setLoginWith('username')} className={ loginWith ==='username'? "text-[#1db954] cursor-pointer font-semibold":"text-[#a4a4a4] cursor-pointer"} >Username</div>
                    <div onClick={() => setLoginWith('email')} className={ loginWith ==='email'? "text-[#1db954] cursor-pointer font-semibold":"text-[#a4a4a4] cursor-pointer"}>Email</div>
                </div>
            </div>
            <input type="text" placeholder={loginWith} name={loginWith} className='bg-[#212121] py-3 px-4 rounded-lg w-8/10' required />
            <input type="text" placeholder='Password' name='password' className='bg-[#212121] py-3 px-4 rounded-lg w-8/10' required />
            <button type='submit' className='bg-[#1db954]  w-5/10 rounded-lg text-xl font-semibold py-2 mt-2 cursor-pointer'>Login</button>
        </form>
    )
}

export default LoginForm

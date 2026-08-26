import React from 'react'
import axios from "axios";

const Form = () => {
    const registerUser = async (e) => {
            e.preventDefault();
    
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
    
             axios.post("http://localhost:3000/api/auth/register", data ,{
                withCredentials: true
             })
            .then((res)=>{
                alert("Post created succecfully")
                console.log(res)
                e.target.reset();
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    return (
        <div className='h-[60vh] w-[50vw] bg-[#121212] px-10 py-2'>
            <div className='text-xl font-semibold text-[#1db954]'>Register</div>
            <form className='flex flex-col gap-2 mt-5' onSubmit={registerUser}>
                <div >Username</div>
                <input type="text" className='bg-[#212121] py-2 px-2 rounded-lg' placeholder='Enter username' name="username" />
                <div className=''>Email</div>
                <input type="email" className='bg-[#212121] py-2 px-2 rounded-lg' placeholder='Enter email' name="email" />
                <div className=''>Password</div>
                <input type="password" className='bg-[#212121] py-2 px-2 rounded-lg' placeholder='Enter password ' name="password" />
                <button className='bg-[#1db954]  rounded-lg text-xl font-semibold py-1 mt-5' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form

import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    const registerUser = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        axios.post("http://localhost:3000/api/auth/register", data, {
            withCredentials: true
        })
            .then((res) => {
                alert("Registered succecfully")
                localStorage.setItem('userInfo',JSON.stringify(res.data));
                console.log(res)
                e.target.reset();
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <form className='h-[55vh] w-full flex flex-col gap-5 items-center ' onSubmit={registerUser}>
            <input type="text" className='bg-[#212121] py-3 px-4 rounded-lg w-8/10' placeholder='Enter username' name="username" required />
            <input type="email" className='bg-[#212121] py-3 px-4 rounded-lg w-8/10' placeholder='Enter email' name="email" required />
            <input type="password" className='bg-[#212121] py-3 px-4 rounded-lg w-8/10' placeholder='Enter password ' name="password" required />
            <select name="role" className='bg-[#212121] py-3 px-4 rounded-lg w-8/10 cursor-pointer'>
                <option value="user">User</option>
                <option value="artist">Artist</option>
            </select>
            <button className='bg-[#1db954]  w-5/10 rounded-lg text-xl font-semibold py-2 mt-2 cursor-pointer' type="submit">Signup</button>
        </form>

    )
}

export default Form

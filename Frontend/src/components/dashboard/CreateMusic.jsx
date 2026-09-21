import axios from 'axios';
import { useEffect } from 'react';

const CreateMusic = ({ setShow }) => {

    const Create = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        axios.post('http://localhost:3000/api/music/create', formData, {
            withCredentials: true,
        })
            .then((res) => {
                alert("Music Uploaded Succesfully")
                console.log(res)
                e.target.reset();
                setShow(false);

            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <div className='h-[80vh] w-[45vw] bg-[#212121] absolute top-5 right-80 z-50 
  rounded-2xl shadow-2xl shadow-black/50 
  border border-white/10 px-4 py-4'>

            <div className="text-[#1db954] font-bold text-2xl mb-4">Add Music</div>
            <form onSubmit={Create} className=" flex flex-col gap-2">

                <div>Audio File</div>
                <input type="file" name='music' className="h-fit w-full px-2 py-2 bg-[#303030] rounded-lg mb-2 cursor-pointer" required />

                <div>Title</div>
                <input type="text" name='title' className="h-fit w-full px-2 py-2 bg-[#303030] rounded-lg outline-none mb-2 cursor-pointer" placeholder='Title' required />

                <div>Song cover</div>
                <input type="file" name='cover' className="h-fit w-full px-2 py-2 bg-[#303030] rounded-lg mb-2 cursor-pointer" required />

                <div>Duration (in Seconds)</div>
                <input type="number" name='duration' className="h-fit w-full px-2 py-2 bg-[#303030] rounded-lg outline-none mb-2 cursor-pointer" required/>

                <div className=" flex gap-4 mt-2 w-full justify-end">
                    <button className="h-fit w-fit px-4 py-3 bg-black rounded-xl cursor-pointer" onClick={() => setShow(false)}>Cancel</button>
                    <button type="submit" className="h-fit w-fit px-4 py-3 bg-[#1db954] rounded-xl cursor-pointer">Add song</button>
                </div>
            </form>

        </div>
    )
}

export default CreateMusic

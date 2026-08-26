import { useEffect, useState } from 'react'
import MusicBox from './MusicBox'
import axios from 'axios';

const MusicContainer = () => {
    const [musics , setMusics] = useState([]);
    useEffect(()=>{
        const getMusics = async() =>{
            await axios.get("http://localhost:3000/api/music/",{ withCredentials: true })
            .then((res)=>{
                console.log(res.data)
                setMusics(res.data.musics)
            })
            .catch((err)=>{
            console.log(err)
        })
        }
        getMusics()
    },[])
    console.log(musics)
    return (
        <div className='h-fit md:w-[87vw] w-full bg-[#1b1b1b] px-2 md:px-4 py-2 md:py-4 rounded-lg overflow-x-auto scroller'>
            <div className='text-xl font-bold'>Musics</div>
            <div className='h-fit w-full flex px-2 py-2 gap-5 items-center'>
                {
                    musics.map((m , index)=>(
                        <MusicBox  img={m.imageUri} key={index} title={m.title} music={m.uri} />
                    ))
                }
                <div className='text-[0.9rem] text-[#1db954] cursor-pointer underline-offset-4 hover:underline'>Show All</div>
            </div>
        </div>
    )
}

export default MusicContainer

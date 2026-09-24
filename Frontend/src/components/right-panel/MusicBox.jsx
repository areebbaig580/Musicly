import { Play } from 'lucide-react'
import { useEffect, useRef } from 'react';
import { useState } from 'react'

const MusicBox = ({ img, title, music }) => {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(music);
        return () => {
            audioRef.current.pause();
            audioRef.current = null;
        };
    }, [music]);

    const handleClick = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (playing === false) {
            audio.play()
            setPlaying(true)
        }
        else if (playing === true) {
            audio.pause()
            setPlaying(false)
        }
    }
    return (
        <div className=' flex flex-col gap-1 items-center'>
            <div className='h-45 w-45 cursor-pointer relative group'>
                <img src={img} alt="" />
                <div className='absolute bottom-10 right-5 h-fit w-fit px-2 py-2 bg-[#1db954] text-black rounded-4xl hidden group-hover:flex' onClick={handleClick}><Play fill='black' /></div>
            </div>
            <div className='text-[#b5b5b5]'>{title}</div>
        </div>
    )
}

export default MusicBox

import { Pause, Play } from 'lucide-react'
import { useEffect, useRef } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const MusicBox = ({ img, title, music, id }) => {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const a = new Audio();
        a.preload = "none";
        a.src = music;
        audioRef.current = a;

        return () => {
            audioRef.current.pause();
            audioRef.current = null;
        };
    }, []);

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
            <div className='h-36 w-36 md:h-45 md:w-45 cursor-pointer relative group imgBox' to={'/music/:id'}>
                <Link className='h-fit w-fit' to={`/music/${id}`}>
                    <img src={img} alt="" />
                </Link>
                <div className={playing ? 'absolute bottom-8 md:bottom-10 right-5 h-fit w-fit px-2 py-2 bg-[#1db954] text-black rounded-4xl '
                    : 'absolute bottom-8 md:bottom-10 right-5 h-fit w-fit px-2 py-2 bg-[#1db954] text-black rounded-4xl flex md:hidden group-hover:flex'}
                    onClick={handleClick}>
                    {playing ? <Pause fill='black' className='size-4 md:size-6'/> : <Play fill='black' className='size-5 md:size-6'/>}
                </div>
            </div>
            <div className='text-[#b5b5b5]'>{title}</div>
        </div>
    )
}

export default MusicBox

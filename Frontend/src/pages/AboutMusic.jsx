import { useEffect, useState } from 'react'
import LeftPanel from '../components/left-panel/LeftPanel'
import UserInfo from '../components/right-panel/UserInfo'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MusicPage from '../components/about-album-music/MusicPage';

const AboutMusic = () => {
    const { id } = useParams();
    const [musicData, setMusicData] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:3000/api/music/${id}`, { withCredentials: true })
            .then((res) => {
                console.log(res.data)
                setMusicData(res.data.music)
                setLoading(false)
            })

    }, [id])
    return (
        <div className='min-h-screen w-full flex'>
            <LeftPanel />
            <div className='h-full grow flex flex-col px-2 py-2 gap-2'>
                <UserInfo />
                {loading ? <div>Loading</div> :
                    <MusicPage musicData={musicData}/> 
                }
            </div>

        </div>
    )
}

export default AboutMusic

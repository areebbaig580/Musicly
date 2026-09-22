import { useState } from "react"
import DashboardAlbumContainer from "./DashboardAlbumContainer"
import DashboardHeading from "./DashboardHeading"
import DashboardMusicContainer from "./DashboardMusicContainer"
import DashboardStats from "./DashboardStats"
import DashboardToggle from "./DashboardToggle"
import CreateMusic from "./CreateMusic"
import axios from "axios"
import { useEffect } from "react"
import CreateAlbum from "./CreateAlbum"

const DashboardContainer = () => {
    const artistId = JSON.parse(localStorage.getItem('userInfo')).user._id;
    const [active, setActive] = useState('music');
    const [show, setShow] = useState(null);
    const [artistMusic, setMusics] = useState([]);
    const [artistAlbum, setAlbums] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/artist/${artistId}/musics`, {
            withCredentials: true,
        }).then((res) => {
            console.log(res.data)
            setMusics(res.data.musics)
        }).catch((err) => {
            console.log(err);
        })

        axios.get(`http://localhost:3000/api/artist/${artistId}/albums`, {
            withCredentials: true,
        }).then((res) => {
            console.log(res.data)
            setAlbums(res.data.albums)
        }).catch((err) => {
            console.log(err);
        })
    }, [artistId])

    return (
        <div className='h-full w-full bg-[#212121] rounded-xl px-4 py-2 relative'>
            <DashboardHeading />
            <DashboardStats songs={artistMusic.length} albums={artistAlbum.length}/>
            <DashboardToggle setActive={setActive} active={active} />
            {active === "music" ? <DashboardMusicContainer setShow={setShow} artistMusic={artistMusic} /> : <DashboardAlbumContainer setShow={setShow} artistAlbum={artistAlbum}/>}
            {show === 'Songs' ? <CreateMusic setShow={setShow} /> : ''}
            {show === 'Album' ? <CreateAlbum setShow={setShow} artistMusic={artistMusic}/> : ''}

        </div>
    )
}

export default DashboardContainer

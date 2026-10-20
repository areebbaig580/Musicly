import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MusicBox from '../right-panel/MusicBox';
import Pagination from './Pagination';

const MoreMusic = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [musics, setMusics] = useState([]);
    const [paginationData, setPaginationData] = useState(null);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const getMusics = async () => {
            await axios.get(`${apiUrl}/api/music?limit=12&page=${page}`, { withCredentials: true })
                .then((res) => {
                    console.log(res.data)
                    setMusics(res.data.musics)
                    setPaginationData(res.data.pagination)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getMusics()
    }, [page])

    return (
        <div className='h-full w-full px-4 py-2 relative'>
            <div className='text-xl font-bold'>More music</div>
            <div className='h-[80vh] w-full md:w-[85vw] flex flex-wrap justify-center gap-4 md:gap-8 mt-4 md:px-2 overflow-y-auto scroller'>
                {musics.map((m, index) => (
                    <MusicBox img={m.imageUri} key={index} title={m.title} music={m.uri} id={m._id} />
                ))}
            </div>
            <Pagination page={page} setPage={setPage} paginationData={paginationData} />

        </div>
    )
}

export default MoreMusic

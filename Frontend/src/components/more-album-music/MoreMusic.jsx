import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MusicBox from '../right-panel/MusicBox';
import Pagination from './Pagination';

const MoreMusic = () => {
    const [musics, setMusics] = useState([]);
    const [paginationData , setPaginationData] = useState(null);
    const[page , setPage] = useState(1);
    useEffect(() => {
        const getMusics = async () => {
            await axios.get(`http://localhost:3000/api/music?limit=12&page=${page}`, { withCredentials: true })
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
            <div className='h-[80vh] w-full md:w-[85vw] flex flex-wrap gap-8 mt-4 px-2 overflow-y-auto scroller'>
                {musics.map((m, index) => (
                    <MusicBox img={m.imageUri} key={index} title={m.title} music={m.uri} />
                ))}
            </div>
            <Pagination page={page} setPage={setPage} paginationData={paginationData} />

        </div>
    )
}

export default MoreMusic

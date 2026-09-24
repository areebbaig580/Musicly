import axios from 'axios';
import { useEffect, useState } from 'react'
import Album from '../right-panel/Album';
import Pagination from './Pagination';

const MoreAlbum = () => {
    const [albums, setAlbums] = useState([]);
    const [paginationData, setPaginationData] = useState(null);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const getAlbums = async () => {
            await axios.get(`http://localhost:3000/api/music/albums?limit=12&page=${page}`, { withCredentials: true })
                .then((res) => {
                    console.log(res.data)
                    setAlbums(res.data.album)
                    setPaginationData(res.data.pagination)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getAlbums()
    }, [page])

    return (
        <div className='h-full w-full px-4 py-2 relative'>
            <div className='text-xl font-bold'>More Albums</div>
            <div className='h-[80vh] w-full md:w-[85vw] flex flex-wrap gap-8 mt-4 px-2 overflow-y-auto scroller'>
                {albums.map((a, index) => (
                    <Album img={a.cover} key={index} title={a.title} artist={a.artist} id={a._id} />
                ))}
            </div>
            <Pagination page={page} setPage={setPage} paginationData={paginationData} />
        </div>
    )
}

export default MoreAlbum

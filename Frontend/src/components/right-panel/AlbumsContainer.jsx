import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Album from './Album';
import { Link } from 'react-router-dom';

const AlbumsContainer = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        const getAlbums = async () => {
            await axios.get("http://localhost:3000/api/music/albums", { withCredentials: true })
                .then((res) => {
                    console.log(res.data)
                    setAlbums(res.data.album)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getAlbums()
    }, [])
    console.log(albums)
    return (
        <div className='h-fit w-full md:w-[85vw] px-2 md:px-4 py-2 md:py-4 rounded-lg relative'>
            <div className='text-xl font-bold'>Albums</div>
            <div className='h-fit w-full flex px-2 py-2 gap-5 items-center overflow-x-auto scroller'>

                {
                    albums.map((a, index) => (
                        <Album img={a.cover} key={index} title={a.title} artist={a.artist} id={a._id} />
                    ))
                }
            </div>
            <Link to={'/Albums'} className='text-[0.9rem] text-[#1db954] cursor-pointer underline-offset-4 hover:underline absolute top-4 right-2'>Show more</Link>
        </div>
    )
}

export default AlbumsContainer

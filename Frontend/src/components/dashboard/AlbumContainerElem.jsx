import axios from 'axios';
import { Calendar, Trash } from 'lucide-react'
import { useEffect } from 'react';
import { useState } from 'react';

const AlbumContainerElem = ({ artistAlbum, setChange }) => {
    const [artistId, setArtistId] = useState();
        useEffect(() => {
            if (artistAlbum.length !== 0) {
                setArtistId(artistAlbum[0].artist);
            }
        }, [artistAlbum])
    
        const deleteAlbum = async (albumId) => {
            axios.delete(`http://localhost:3000/api/music/artist/${artistId}/album/${albumId}`, {
                withCredentials: true,
            }).then((res) => {
                console.log(res)
                setChange('delete')
                alert('Album deleted Succesfully')
            }).catch((err) => {
                console.log(err)
            })
        }
    return (
        <div className='mt-2 flex flex-col gap-2 h-[40vh] overflow-y-auto scroller'>
            {artistAlbum.map((a, index) => (

                <div className='flex w-full justify-between items-center' key={index}>
                    <div className='flex gap-2 items-center w-[10vw] '>
                        <img src={a.cover} alt="" className='h-10' />
                        <div className='capitalize text-lg'>{a.title}</div>
                    </div>
                    <div className='flex gap-1 items-center text-[#d8d8d8] w-[7vw] '><Calendar size={18} />{a.createdAt.split('-')[0]}</div>
                    <div className='w-[4vw] '>{a.musics.length}</div>
                    <div className='w-[4vw] flex justify-center' onClick={()=>deleteAlbum(a._id)}><Trash className='text-red-500 hover:text-red-600 cursor-pointer' /></div>
                </div>
            ))}

        </div>
    )
}

export default AlbumContainerElem

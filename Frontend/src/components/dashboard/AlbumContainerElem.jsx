import axios from 'axios';
import { Calendar, Pencil, Trash } from 'lucide-react'

const AlbumContainerElem = ({ artistAlbum, setChange, setShow, setAlbumIndex }) => {
     const apiUrl = import.meta.env.VITE_API_URL;

    const deleteAlbum = async (albumId) => {
        axios.delete(`${apiUrl}/api/music/artist/album/${albumId}`, {
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

                <div className='flex w-full justify-between items-center relative group' key={index} tabIndex={0}>
                    <div className='flex gap-2 items-center md:w-[10vw] '>
                        <img src={a.cover} alt="" className='h-10' />
                        <div>

                            <div className='text-[1rem] capitalize md:text-lg'>{a.title}</div>
                            <div className='flex md:hidden text-[#d8d8d8] text-sm'>{a.createdAt.split('-')[0]}</div>
                        </div>
                    </div>
                    <div className='hidden md:flex gap-1 items-center text-[#d8d8d8] w-[7vw] '><Calendar size={18} />{a.createdAt.split('-')[0]}</div>
                    <div className='w-[4vw] '>{a.musics.length}</div>
                    <div className='md:w-[4vw] flex justify-center' onClick={() => deleteAlbum(a._id)}><Trash className='text-red-500 hover:text-red-600 cursor-pointer' /></div>
                    <div className='absolute left-3 hidden group-focus:block md:group-hover:block cursor-pointer' onClick={() => { setAlbumIndex(index), setShow('Update') }}><Pencil size={18} /></div>
                </div>
            ))}

        </div>
    )
}

export default AlbumContainerElem

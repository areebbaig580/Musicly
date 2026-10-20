import { Calendar, Trash } from 'lucide-react'

const MusicElem = ({ artistMusic, deleteMusic }) => {
    return (
        <>
            {
                artistMusic.map((m, index) => (

                    <div className='flex w-full justify-between items-center pr-4' key={index}>
                        <div className='flex gap-2 items-center md:w-[20vw]'>
                            <img src={m.imageUri} className='h-10' />
                            <div>
                                <div className='capitalize text-[1rem] md:text-lg'>{m.title}</div>
                                <div className='flex md:hidden text-sm text-[#d8d8d8]'>{m.createdAt.split('T')[0]}</div>

                            </div>
                        </div>
                        <div className='hidden md:flex gap-1 items-center text-[#d8d8d8] mr-[14vw]'><Calendar size={18} />{m.createdAt.split('T')[0]}</div>
                        <div onClick={() => deleteMusic(m._id)}><Trash className='text-red-500 hover:text-red-600 cursor-pointer' /></div>
                    </div>

                ))
            }
        </>

    )
}

export default MusicElem

import { Calendar, Trash } from 'lucide-react'

const MusicElem = ({ artistMusic, deleteMusic }) => {
    return (
        <>
            {artistMusic.map((m, index) => (

                <div className='flex w-full justify-between items-center pr-4' key={index}>
                    <div className='flex gap-2 items-center w-[20vw]'>
                        <img src={m.imageUri} className='h-10' />
                        <div className='capitalize text-lg'>{m.title}</div>
                    </div>
                    <div className='flex gap-1 items-center text-[#d8d8d8] mr-[14vw]'><Calendar size={18} />{m.createdAt.split('T')[0]}</div>
                    <div onClick={() => deleteMusic(m._id)}><Trash className='text-red-500 hover:text-red-600 cursor-pointer' /></div>
                </div>

            ))}
        </>
    )
}

export default MusicElem

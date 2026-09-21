import { Calendar, Trash } from 'lucide-react'

const MusicContainerElem = ({ artistMusic }) => {
    return (
        <div className='mt-2 flex flex-col gap-2'>
            {artistMusic.map((m, index) => (

                <div className='flex w-full justify-between items-center pr-4' key={index}>
                    <div className='flex gap-2 items-center w-[20vw]'>
                        <img src={m.imageUri} className='h-10' />
                        <div className='capitalize text-lg'>{m.title}</div>
                    </div>
                    <div className='flex gap-1 items-center text-[#d8d8d8] mr-[14vw]'><Calendar size={18} />{m.createdAt.split('T')[0]}</div>
                    <div><Trash className='text-red-500 hover:text-red-600 cursor-pointer' /></div>
                </div>

            ))}

        </div>
    )
}

export default MusicContainerElem

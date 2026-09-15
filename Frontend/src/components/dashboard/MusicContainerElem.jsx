import { Calendar, Trash } from 'lucide-react'

const MusicContainerElem = () => {
    return (
        <div className='mt-2'>
            <div className='flex w-full justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <img src="https://s.saregama.tech/image/c/fw_485/5/28/70/zara-zara-mister-priyanshu_1440_1686289421.jpg" alt="" className='h-10' />
                    <div className='capitalize text-lg'>zara zara</div>
                </div>
                <div className='pr-15 flex gap-1 items-center text-[#d8d8d8]'><Calendar size={18} />2024-10-10</div>
                <div className='pr-15'><Trash className='text-red-500 hover:text-red-600 cursor-pointer' /></div>
            </div>
        </div>
    )
}

export default MusicContainerElem

import { Music, Plus } from 'lucide-react'

const ContainerHeading = ({ title , setShow}) => {
    return (
        <div className='w-full flex  justify-between'>
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-2'><Music size={18} className='text-[#1db954]' /> {title} library</div>
                <div className='text-[#cdcdcd]'>Manage your {title}</div>
            </div>
            <div className='flex gap-2 bg-[#1db954] h-fit w-fit items-center px-2 py-2 rounded-lg text-black cursor-pointer' onClick={()=>setShow(title)} ><Plus />Add {title}</div>
        </div>
    )
}

export default ContainerHeading

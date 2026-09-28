import { Clock } from "lucide-react"

const MusicPage = ({ musicData }) => {
    return (
        <div className='h-full w-full bg-[#212121] rounded-xl px-4 py-4'>
            <div className='flex gap-2'>

                <img src={musicData.imageUri} alt="" className='h-[35vh]' />
                <div className='px-4 py-4'>
                    <div className='pl-2'>Music</div>
                    <div className='text-8xl capitalize font-semibold '>{musicData.title}</div>
                    <div className='pl-2 mt-2'>{musicData.artist.username}</div>
                    <div className='pl-2 mt-2 text-sm text-[#939393]'>{musicData.createdAt.split('T')[0]}</div>

                </div>
            </div>
            <div className='px-2 flex flex-col gap-2 mt-5'>
                <div className='flex items-center justify-between gap-5 cursor-pointer px-10 py-2 text-[#b1b1b1] border-b border-[#484848]'>
                    <div>Title</div>
                    <div><Clock size={20} /></div>
                </div>
                <div className='h-[42vh] w-full overflow-y-auto scroller'>

                    <div className='flex items-center justify-between cursor-pointer hover:bg-[#383838] px-2 py-1 rounded-xl'>
                        <div className='flex items-center gap-5'>
                            <div>1</div>
                            <img src={musicData.imageUri} alt="" className='h-12' />
                            <div>
                                <div className='capitalize'>{musicData.title}</div>
                                <div className='text-sm text-[#b1b1b1]'>{musicData.artist.username}</div>

                            </div>
                        </div>
                        <div className='pr-7 text-[#b1b1b1]'>{`${Math.floor(musicData.duration / 60)}:${musicData.duration % 60}`}</div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MusicPage

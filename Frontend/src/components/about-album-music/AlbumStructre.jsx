import { Clock } from 'lucide-react'

const AlbumStructre = ({ albumData }) => {

  return (
    <div className='h-[92vh] w-full bg-[#212121] rounded-xl px-2 md:px-4 py-4'>
      <div className='flex gap-2'>

        <img src={albumData.cover} alt="" className='h-[20vh] md:h-[35vh]' />
        <div className='px-4 py-4'>
          <div className='md:pl-2'>Album</div>
          <div className='text-5xl md:text-9xl capitalize font-semibold '>{albumData.title}</div>
          <div className='md:pl-2 mt-2'>{albumData.artist.username}</div>

        </div>
      </div>
      <div className='md:px-2 flex flex-col gap-2 mt-5'>
        <div className='flex items-center justify-between gap-5 cursor-pointer px-8 md:px-10 py-2 text-[#b1b1b1] border-b border-[#484848]'>
          <div>Title</div>
          <div><Clock size={20} /></div>
        </div>
        <div className='h-[42vh] w-full overflow-y-auto scroller'>

          {albumData.musics?.map((a, index) => (
            <div key={index} className='flex items-center justify-between cursor-pointer focus:bg-[#383838] hover:bg-[#383838] px-1 md:px-2 py-1 rounded-xl' tabIndex={0}>
              <div className='flex items-center gap-2 md:gap-5'>

                <div>{index + 1}</div>
                <img src={a.imageUri} alt="" className='h-10 md:h-12' />
                <div>
                  <div className='capitalize'>{a.title}</div>
                  <div className='text-sm text-[#b1b1b1]'>{albumData.artist.username}</div>

                </div>
              </div>
              <div className='pr-7 text-[#b1b1b1]'>{`${Math.floor(a.duration / 60)}:${a.duration % 60}`}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default AlbumStructre

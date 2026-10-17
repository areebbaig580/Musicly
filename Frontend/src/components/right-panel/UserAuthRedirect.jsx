import { EllipsisVertical, Link } from 'lucide-react'

const UserAuthRedirect = ({ handleClick, userName, boxRef }) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='capitalize'>{userName}</div>
      <div className='cursor-pointer' onClick={handleClick}><EllipsisVertical size={20} /></div>
      <div className='h-fit w-fit bg-[#212121] absolute top-10 right-5 px-4 py-2 rounded-lg hidden z-50' ref={boxRef}>
        <Link to={"/register"} className='cursor-pointer hover:text-[#1db954]'>Register</Link>
        <Link to={"/"} className='cursor-pointer hover:text-[#1db954]'>Login</Link>
        <div className='cursor-pointer hover:text-red-500'>Logout</div>
      </div>
    </div>
  )
}

export default UserAuthRedirect

import LeftPanel from '../components/left-panel/LeftPanel'
import RightPanel from '../components/right-panel/RightPanel'
import UserInfo from '../components/right-panel/UserInfo'

const Home = () => {
  return (
    <div className='text-white min-h-screen w-full flex flex-col md:flex-row overflow-x-hidden'>
      <LeftPanel/>
      <div className='py-2 flex flex-col gap-2'>

      <UserInfo/>
      <RightPanel />
      </div>
    </div>
  )
}

export default Home

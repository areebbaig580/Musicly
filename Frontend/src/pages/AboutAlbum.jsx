import { useEffect, useState } from 'react'
import LeftPanel from '../components/left-panel/LeftPanel'
import UserInfo from '../components/right-panel/UserInfo'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AlbumStructre from '../components/about-album-music/AlbumStructre';
import Footer from '../components/right-panel/Footer';

const AboutAlbum = () => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`http://localhost:3000/api/music/albums/${id}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        setAlbumData(res.data.album)
        setLoading(false)
      })

  }, [id])

  return (
    <div className='text-white min-h-screen w-full flex flex-col md:flex-row overflow-x-hidden'>
      <LeftPanel />
      <div className='h-screen grow flex flex-col px-2 py-2 gap-2'>
        <UserInfo />
        <div className='h-full w-full rounded-xl overflow-y-auto scroller overflow-x-hidden'>
          <div className='h-[92vh] md:bg-[#212121]'>
            {loading ? <div>Loading</div> :
              <AlbumStructre albumData={albumData} />
            }
          </div>
          <Footer />
        </div>
      </div>

    </div>
  )

}

export default AboutAlbum

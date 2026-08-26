import React, { useEffect, useState } from 'react'
import LeftPanel from '../components/left-panel/LeftPanel'
import UserInfo from '../components/right-panel/UserInfo'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Clock } from 'lucide-react';
import AlbumStructre from '../components/about album/AlbumStructre';

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

  if (loading) {
    return <div>loading..</div>

  } else {

    return (
      <div className='min-h-screen w-full flex'>
        <LeftPanel />
        <div className='h-full grow flex flex-col px-2 py-2 gap-2'>
          <UserInfo />
          <AlbumStructre albumData={albumData}/>
        </div>

      </div>
    )
  }
}

export default AboutAlbum

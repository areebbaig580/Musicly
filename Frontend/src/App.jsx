import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Register from './pages/Register'

import AboutAlbum from './pages/AboutAlbum'

import AllMusic from './pages/AllMusic'
import AllAlbums from './pages/AllAlbums'


const App = () => {
  return (
    <div className='min-h-screen w-full flex flex-col md:flex-row bg-black text-white'>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/album/:id" element={<AboutAlbum />} />
          <Route path="/Musics" element={<AllMusic />} />
          <Route path="/Albums" element={<AllAlbums />} />
        </Routes>
      

    </div>
  )
}

export default App

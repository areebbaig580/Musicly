import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Register from './pages/Register'
import LeftPanel from './pages/LeftPanel'


const App = () => {
  return (
    <div className='min-h-screen w-full flex flex-col md:flex-row bg-black text-white'>
      <LeftPanel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  )
}

export default App

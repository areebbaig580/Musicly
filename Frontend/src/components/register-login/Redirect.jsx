import { Link } from 'react-router-dom'

const Redirect = ({text , link, icon}) => {
    return (
        <div className="md:absolute flex md:right-15 md:top-10 gap-2 items-center mt-8">
            <div className="text-[#b0b0b0] md:font-semibold">{text}</div>
            <Link to={link} className="h-fit w-fit md:px-7 py-2 rounded-2xl md:bg-[#1db954] font-semibold cursor-pointer text-lg z-90">{icon}</Link>
        </div>
    
    )
}

export default Redirect

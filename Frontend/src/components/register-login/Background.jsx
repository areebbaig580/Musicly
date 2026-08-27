import Redirect from "./Redirect"

const Background = ({ link, text, icon }) => {
    return (
        <div className="h-screen w-7/10 relative">
            <Redirect link={link} text={text} icon={icon} />
            <div className="absolute z-50 h-full w-full flex flex-col items-center justify-center gap-10 bg-white/3">
                <div className="text-9xl text-center font-bold">Musics for Everyone.</div>
                <div className="text-xl font-semibold">Your Favourite songs no Credit card needed.</div>
            </div>
            <img src="https://images.unsplash.com/photo-1549761505-a31eb21119d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="background-img" className="h-full w-full object-cover" />
        </div>

    )
}

export default Background

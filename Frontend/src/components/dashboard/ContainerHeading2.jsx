

const ContainerHeading2 = ({elem}) => {
    return (
        <div className='flex w-full justify-between px-12 mt-4 text-[#cdcdcd]'>
            {elem.map((e, index)=>(
                <div key={index}>{e}</div>
            ))}
        </div>
    )
}

export default ContainerHeading2



const ContainerHeading2 = ({elem}) => {
    return (
        <div className='flex w-full justify-between  mt-4 text-[#cdcdcd]'>
            {elem.map((e, index)=>(
                <div key={index} className={index===0?'pl-14':''}>{e}</div>
            ))}
        </div>
    )
}

export default ContainerHeading2

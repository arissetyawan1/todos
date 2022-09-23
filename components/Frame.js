const Frame = ({title, children }) => {
    return (
        <div className={'min-h-screen border-red-400 w-full bg-yellow-200 p-10'}>
            <div className='w-full h-auto bg-white mx-auto flex flex-col items-center'>
                <div className='absolute w-2/6 h-10 bg-yellow-200  rounded-b-[1rem] text-center my-auto z-50'>
                <h1 className='font-bold text-orange-500 text-xl'>
                    {title}
                </h1>
                </div>
                <div className='w-10/12 my-24'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Frame;
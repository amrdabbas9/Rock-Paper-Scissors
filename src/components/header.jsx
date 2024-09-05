import lock from '../images/logo.svg'


export default function Header({score}){

    return(
        <div className="header relative z-10 w-5/6 md:w-4/6 lg:w-3/6 mt-10 rounded-lg p-2 lg:p-5 flex justify-between items-center">
            <img className='w-28 md:w-32 lg:w-40' src={lock} />
            <div className='bg-white h-full w-28 p-2 rounded-lg flex flex-col justify-center items-center'>
                <p className='text-sm sm:text-base font-bold'>SCORE</p>
                <h1 className='text-4xl sm:text-5xl font-bold'>{score}</h1>
            </div>
        </div>
    )
}
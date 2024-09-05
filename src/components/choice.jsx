

export default function Choice({img, choiceClass, handleChoice = () => {}, type, dimentions = {outer: 'w-36 h-36 sm:w-40 sm:h-40', inner: 'w-24 h-24 sm:w-28 sm:h-28'}, children}){

    return(
        <div  onClick={() => handleChoice(type)}  className={`${choiceClass} relative outer-circle flex justify-center items-center ${dimentions.outer} rounded-full mst-3`}>
            <div className={`inner-circle flex justify-center items-center ${dimentions.inner} p- rounded-full bg-white`}>
                <img src={img} />
            </div>
            {children}
        </div>
    )
}
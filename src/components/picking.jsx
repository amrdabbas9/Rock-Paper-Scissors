import { useState } from "react"

import StepOne from "./stepone"
import StepTwo from "./steptwo"
import Fading from "./fading"


export default function Picking(){

    const [picked, setPicked] = useState(true)
    const [userChoice, setUserChoice] = useState('')
    

    function handleChoice(type){
        setPicked(false)
        setUserChoice(() => type)
    }
    
    return(
        // <Fading classes={`picking w-full flex-1 flex justify-center items-center relative smt-10 -z-0`} delay={300} dependencies={[picked]}>
        <Fading classes={`picking w-full flex-1 flex justify-center ${!picked ? "items-start" : "items-center"} relative smt-10 -z-0`} delay={300} dependencies={[picked]}>
            {
                picked ?
                <StepOne handleChoice={handleChoice} />
                :
                <StepTwo userChoice={userChoice} setPicked={setPicked} />
            }
        </Fading>
    )
}
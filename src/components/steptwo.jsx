// Hooks :
import { useEffect, useState, useContext, createContext } from "react"

// Functions :
import { updateScoreFun, getRandomNumber } from "./functions"

// Score Context :
import { ScoreContext } from "../App"

// Components :
import ScoreModal from "./scoremodal"
import UserChoice from "./userchoice"
import HouseChoice from "./housechoice"

export const ChoicesContext = createContext()

let choices = ['rock', 'paper', 'scissors']

export default function StepTwo({ userChoice, setPicked }){
    
    const [houseChoice, setHouseChoice] = useState('')
    const [updateScore, setUpdateScore] = useState(false)
    const {score, setScore} = useContext(ScoreContext)

    useEffect(() => {
        setTimeout(() => {
            setHouseChoice(choices[Math.ceil(((getRandomNumber(0,2) + getRandomNumber(0,2) + getRandomNumber(0,2)) / 3))])
            setUpdateScore(() => true)
        }, 3000)
    }, [])

    updateScore ? setScore(score => {
                    setUpdateScore(() => false)
                    return updateScoreFun(score, userChoice, houseChoice)
                }) : null
    
    return(
        <div className={`trans step-two h-full ${houseChoice && !updateScore ? 'w-4/5' : 'w-1/2'} max-sm:w-11/12 text-white text-center flex flex-row`}>
                <ChoicesContext.Provider value={{userChoice, houseChoice}}>

                    <UserChoice updateScore={updateScore} />

                    <HouseChoice updateScore={updateScore}/>
                    
                </ChoicesContext.Provider>

                {houseChoice && !updateScore ? 
                    <ScoreModal setPicked={setPicked} />
                : null}
        </div>
    )
}

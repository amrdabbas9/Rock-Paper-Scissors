
import Fading from "./fading"
import Choice from "./choice"
import WinnerEffect from "./winnereffect"
import { useContext } from "react"
import { ScoreContext } from "../App"

// Images :
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import { ChoicesContext } from "./steptwo"

let imgs = {
    'rock' : rock,
    'paper' : paper,
    'scissors' : scissors
}


export default function HouseChoice({updateScore}){

    const {score} = useContext(ScoreContext)
    const {houseChoice} = useContext(ChoicesContext)

    return(
        // ${houseChoice && !updateScore ? 'max-sm:justify-start max-sm:mt-4' : 'max-sm:justify-center'}`
        <div  className={`trans flex-1 flex flex-col max-sm:flex-col-reverse items-center justify-center relative ${houseChoice && !updateScore ? 'max-sm:-top-1/4' : 'max-sm:top-0'}`}>
            <h1 className="font-bold text-xl max-sm:text-lg max-sm:mt-8">THE HOUSE PICKED</h1>
            <Fading delay={1000}>
                {
                    houseChoice ? 
                    <Choice img={imgs[houseChoice]} type={houseChoice} handleChoice={() => {}} choiceClass={`${houseChoice} sm:mt-8`} dimentions={{outer: 'w-36 h-36 sm:w-52 sm:h-52', inner: 'w-24 h-24 sm:w-36 sm:h-36'}}>
                                { ('LOSE' == score[1] && (houseChoice && !updateScore)) ? <WinnerEffect /> : null} 
                            </Choice>    
                            : 
                            null
                        }
            </Fading>
        
            <div className={`bg-slate-900 ${houseChoice ? 'hidden' : 'flex'} rounded-full justify-center items-center sm:mt-12 w-36 h-36 sm:w-48 sm:h-48`}></div>
        </div>
    )
}
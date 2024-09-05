import { useContext } from "react"
import Choice from "./choice"
import WinnerEffect from "./winnereffect"

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

export default function UserChoice({updateScore}){

    const {score} = useContext(ScoreContext)
    const {userChoice, houseChoice} = useContext(ChoicesContext)

    return(
        <div className={`trans flex-1 flex flex-col max-sm:flex-col-reverse items-center justify-center relative ${houseChoice && !updateScore ? 'max-sm:-top-1/4' : 'max-sm:top-0'}`}>
            <h1 className="font-bold text-xl max-sm:text-lg max-sm:mt-8">YOU PICKED</h1>
                <Choice img={imgs[userChoice]} type={userChoice} choiceClass={`${userChoice} sm:mt-8`} dimentions={{outer: 'w-36 h-36 sm:w-52 sm:h-52', inner: 'w-24 h-24 sm:w-36 sm:h-36'}}>
                    { ('WIN' == score[1] && (houseChoice && !updateScore)) ? <WinnerEffect /> : null}
                </Choice>
        </div>
    )
}
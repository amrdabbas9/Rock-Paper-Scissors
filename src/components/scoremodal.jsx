import { useContext } from "react"
import Fading from "./fading"

import { ScoreContext } from "../App"

export default function ScoreModal({ setPicked }){
    const {score} = useContext(ScoreContext)

    return(
        <Fading delay={1000}>
            <div className="score-modal absolute top-1/2 max-sm:mt-10 left-1/2 sm:-translate-y-1/2 -translate-x-1/2">
                <h1 className="text-white text-3xl max-sm:text-4xl font-bold mb-5"> YOU {score[1]} </h1>
                <button className="bg-white transition hover:text-red-400 p-3 rounded-lg pl-10 pr-10 font-medium max-sm:text-lg"  onClick={() => setPicked(p => !p)} >
                    PLAY AGAIN
                </button>
            </div>
        </Fading>
    )
}
import Choice from "./choice"

// Images :
import triangle from '../images/bg-triangle.svg'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'


export default function StepOne({ handleChoice }){

    return(
        <div className={`transition flex flex-col `}>
            <img className="absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-64" src={triangle} />
            <div className="top-picking flex mb-3 sm:mb-6">
                <Choice img={paper} handleChoice={handleChoice} type='paper' choiceClass='paper mr-10 sm:mr-20' />
                <Choice img={scissors} type='scissors' handleChoice={handleChoice}  choiceClass='scissors' />
            </div>
            <div className="bottom-picking flex justify-center">
                <Choice img={rock} type='rock' handleChoice={handleChoice}  choiceClass='rock' />
            </div>
        </div>
    )
}
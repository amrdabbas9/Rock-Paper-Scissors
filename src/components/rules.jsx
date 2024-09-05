import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

// Images
import close from '../images/icon-close.svg'
import rules from '../images/image-rules.svg'

import Fading from "./fading";

export default function Rules(){
    const [showRules, setShowRules] = useState(false)

    
    
    return(
        <>
            <button onClick={() => setShowRules(true)} className="absolute bottom-7 right-1/2 max-sm:translate-x-1/2 sm:right-7 lg:right-16 text-white font-bold border p-1 pl-7 pr-7 rounded-md">Rules</button>
            {showRules ? <PortalRules setShowRules={setShowRules}  /> : null}
        </>
    )
    
}

function PortalRules({setShowRules}){

    useEffect(() => {
        function handleEscape(e){
            if(e.key == 'Escape'){
                setShowRules(false)
            }
        }
        window.addEventListener('keydown', handleEscape)

        return () => {
            window.removeEventListener('keydown', handleEscape)
        }
    })
    

    return createPortal(
        <Fading>
            <div className="rules z-50 absolute flex justify-center items-center w-full h-full top-0 left-0">
                <div className="w-full h-full sm:h-fit flex flex-col sm:w-fit bg-white p-10 rounded-lg">
                    <div className="flex justify-between items-center mb-5">
                        <h1 className="text-2xl font-bold">Rules :</h1>
                            <img  onClick={() => setShowRules(false)} src={close} />
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <img src={rules} />
                    </div>
                </div>
            </div>
        </Fading>
        ,
        document.getElementById('rulesportal')
    )
}
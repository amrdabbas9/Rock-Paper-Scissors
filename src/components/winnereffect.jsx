import Fading from "./fading"

export default function WinnerEffect(){


    return(
        <>  
            <Fading classes={"layer-3 -z-10 max-sm:w-64 max-sm:h-64 w-96 h-96 rounded-full absolute top-1/2 lef-1/2 -translate-y-1/2"} delay={2000}>
                {/* <div className="layer-3 -z-10 w-96 h-96 rounded-full absolute top-1/2 lef-1/2 -translate-y-1/2">
                </div> */}
            </Fading>
            <Fading classes={"layer-2 -z-10 max-sm:w-52 max-sm:h-52 w-80 h-80 rounded-full absolute top-1/2 lef-1/2 -translate-y-1/2"} delay={1750}>
                {/* <div className="layer-2 -z-10 w-80 h-80 rounded-full absolute top-1/2 lef-1/2 -translate-y-1/2">
                </div> */}
            </Fading>
            <Fading classes={"layer-1 -z-10 max-sm:w-44 max-sm:h-44 w-64 h-64 rounded-full absolute top-1/2 lef-1/2 -translate-y-1/2"} delay={1500}>
                {/* <div className="layer-1 -z-10 w-64 h-64 rounded-full absolute top-1/2 lef-1/2 -translate-y-1/2">
                </div>   */}
            </Fading>
        </>
    )
}
import { useRef, useEffect, useLayoutEffect } from "react"


export default function Fading({classes, delay, dependencies = [], children}){
    const childRef = useRef()
    
    useLayoutEffect(() => {
        if(childRef.current){
            childRef.current.style.transition = '0s'
            childRef.current.style.opacity = 0
        }
    }, dependencies)
    
    useEffect(() => {
        setTimeout(() => {
            if(childRef.current){
                childRef.current.style.transition = '1s'
                childRef.current.style.opacity = 1
            }
        }, delay)
    }, [...dependencies, delay])

    return(
        <div ref={childRef} className={classes}>
            {children}
        </div>
    )
}
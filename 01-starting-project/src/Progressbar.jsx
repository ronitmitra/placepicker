import { useEffect, useState } from "react";

export default function Progressbar({TIMER,open}) {
    const [timeRemaining,setTimeRemaining]=useState(TIMER);
      useEffect(()=>{
        if(open){
          const interval= setInterval(()=>{
            // console.log('interval')
        setTimeRemaining((prevtime) => Math.max(0,prevtime-10))
            },10);
            setTimeRemaining(TIMER)
            return ()=>{
              clearInterval(interval)     
            }
        }
       },[open]);
     
  return <progress value={timeRemaining} max={TIMER}/>
}

import React, { useEffect, useState } from 'react'

const TimerDemo = () => {
    const [seconds,setSeconds] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setSeconds(prev=>prev+1);
        },1000);

        return ()=>{
            clearInterval(timer);
            console.log("Timer Stopped");
        }

    },[])

  return (
    <div>
        <h1>Timer</h1>
        <h2>{seconds}</h2>
    </div>
  )
}

export default TimerDemo
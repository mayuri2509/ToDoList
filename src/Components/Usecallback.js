import React,{Component, useCallback, useState} from "react";

function Callback(){
    const[count,setCount]= useState(0);
    const handle = useCallback(()=>{
        setCount(count+1)
        console.log(`Callback ${count}`)
    },[count])
    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={handle}></button>
        </div>
    )
}
export default Callback;
// import Callback from "./Component.js/Hooks.js/Usecallback";
{/* <Callback/> */}
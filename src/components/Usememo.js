import React, { useMemo } from "react";

function Memo(){
    const num = 1;
   const answer = useMemo(() => num+1 ,[num])
   const handle =()=>{
    console.log(`Print answer ${answer}`)
   }
    return(
        <div>
            <button onClick={handle}>Click me</button>
        </div>
    )
   }
export default Memo;
// import Memo from "./Component.js/Hooks.js/Usememo";
{/* <Memo/> */}
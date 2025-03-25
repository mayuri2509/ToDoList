
import React,{useRef} from "react";


 function LogButtonClicks(){
    const countRef = useRef(0);

    const handle = () =>{
     countRef.current++;
     console.log(`Clicked render ${countRef.current}`);

    };
   console.log("I render!!")
    return (
    <div>

   
    <button onClick={handle}>Click me</button>
    </div>
    );
 }
 export default LogButtonClicks;
//  import LogButtonClicks from "./Component.js/Hooks.js/Useref";
 // <LogButtonClicks/>
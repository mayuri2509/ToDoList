 import React,{useState} from "react";

 function Counter(){
      const[count,setCount] = useState(0);
     
   return(
     <div>
         <h1>Count: {count}</h1>
         <button onClick={() => {setCount(count+1)
            console.log(count)}}>Add 1</button>
        <button onClick={() =>setCount(count-1)}>Decrease 1</button>
        <button onClick={() => setCount(count+10)}>Add 10</button>
        <button onClick={() => setCount(count-10)}>Decrease 10</button>
        <button onClick={() => setCount(0)}>Reset count</button>
  
     </div>
     );
 
 }
 export default Counter;
 
 //import Counter from "./Component.js/Hooks.js/Usestate";
//  <Counter/> 

 




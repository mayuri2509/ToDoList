
import { useState, useEffect } from "react";

function Effect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Click {count} times{" "}
            </button>
        </div>
    );
}
export default Effect;
// import Effect from "./Component.js/Hooks.js/Useeffect";
{/* <Effect/>  */}
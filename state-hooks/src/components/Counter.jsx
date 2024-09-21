import React, {useState} from 'react'

function Counter() {
   const [count, setCount] = useState();

        const increment = () => {
            setCount(count+1);
        }
        const decrement = () => {
            setCount(count-1);
        }
        const reset = () =>{
            setCount(0);
        }
   
    return(
        <div className="counter-div">
       <p className="count-display">{count}</p>
   <button className="count-btn" onClick={decrement} > Decrease</button>
   <button className="count-btn" onClick={increment} > Increase</button>
   <button className="count-btn" onClick={reset} > Reset</button>
        </div>
    );
}

export default Counter;

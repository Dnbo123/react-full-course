// updater function = A function passed as an argument to setState() usually 
//                    i.e setYear(arrow function)
//                   Allows for safe updates based on the previous state
//                   Used with multiple state updtaes for asynchronous functions
//                   it is good practice to always use updater functions

import React, {useState} from 'react';

function MyComponent() {
const [count, setCount] = useState();

function increment(){
//using an updater function to increase count by 3
//    on every click

    setCount(c => c+1);
    setCount(c => c+1);
    setCount(c => c+1);
};
function decrement(){
//using an updater function to increase count by 3
//    on every click

    setCount(c => c-1);
    setCount(c => c-1);
    setCount(c => c-1);
};
function reset(){
    setCount(0);
};

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>

    );
}

export default MyComponent;
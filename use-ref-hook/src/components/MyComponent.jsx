// useState() = Re-renders the component when the state value changes

// useRef()  = "use Reference" Does not cause re-renders when its value changes.
//              Used When you want la component to "remember" some information,
//              but you dont want that information to trigger new re-renders.

//            1. Accessing/ Interacting with DOM elements
//            2. Handling focus, animation, and transitions
//            3. Managing timers and Intervals


import React, {useState, useEffect, useRef} from 'react'

function MyComponent() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("useEffect is called");
    });

    function handleClick1() {
      inputRef1.current.focus();
      inputRef1.current.style.backgroundColor = "yellow";
       inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
      }
      function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
      }

  return (
    <div>
      <button onClick={handleClick1}>
           Click Me1
      </button>
      <input ref={inputRef1}/><br/>

      <button onClick={handleClick2}>
           Click Me2
      </button>
      <input ref={inputRef2}/><br/>

      <button onClick={handleClick3}>
           Click Me3
      </button>
      <input ref={inputRef3}/>
    </div>
  )
}

export default MyComponent;
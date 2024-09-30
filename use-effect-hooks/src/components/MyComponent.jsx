

//UseEffct() = Is a react hook that tells React DO SOME CODE WHEN (pick one)
//              This component re-renders
//              This component mounts
//              The state of a value

// useEffect(function, [dependancies])
// 1. useEffect(() => {})         //Runs after every re-render
// 2. useEffect(() => {}, [])      //Runs once after the first render(on mount)
// 3. useEffect(() => {}, [value]) //Runs on mount + when value changes

// USES
// #1 Event listeners
// #2 DOM manipulation
// #3 Subscriptions(real-time updates)
// #4 API calls(fetching data)
// #5 Clean up when component unmounts(is removed from DOM)
import React, {useState, useEffect} from 'react';

function MyComponent() {
    /*
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `count: ${count}`;
    }, [count]);

    function addCount() {
        setCount(c => c + 1)
    }
    function minusCount() {
        setCount(c => c - 1)
    }
    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

  return (
    <>
      <div>
    <p style={{color: color}}>count: {count}</p>
    <button onClick={addCount}>Add</button>

    <button onClick={minusCount}>Minus</button> <br/>
    <button onClick={changeColor}>Change Color</button>

    </div>
    </>
  
  )*/

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect (() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Lisetener Added");

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Lisetener Removed");
        }
    },[]);

    useEffect(() => {
        document.title = `size: ${width} x ${height}`;
        }, [width, height]);

        //Handling the resize event listener
function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
}

    return(  
        <>
         <p>Window width: {width}px</p>
         <p>Window height: {height}px</p>
        </>
       
    );
}

export default MyComponent;
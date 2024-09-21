//  React hook = special function that allows functional components 
//             to use features without writing class components 
//              {useState, useEffect, useContext, useReducer, useCallback, and more..}

// useState() = A react hook that allows the craetion of a stateful variable
//              And a setter function to update its value in the virtual DOM.
//              [name, setName]

import MyComponent from "./components/myComponent.jsx"
import Counter from "./components/Counter.jsx"
function App() {
  
  return (
    <>
    <MyComponent/>
     <Counter/>
    </>
  )
}

export default App

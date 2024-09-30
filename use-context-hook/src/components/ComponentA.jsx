//useContext() = Is  a React hook that allows younto share values
//               betwen multiple levels of components
//               without passing props through each level

// in the PROVIDER COMPONENT:👇
// 1. import {createContext} from 'react
// 2. export const Mycontext = createContext();
// 3. <MyContext.Provider value={value}>
//          <child />
//     </MyContext.Provider>

// in the CONSUMER COMPONENT
// 1. import { useContext } from 'react'
// 2. import {MyContext} from './ComponentA.jsx'
// 3. const value = useContext(MyContext);

import React, {useState, createContext} from 'react'
import ComponentB from './ComponentB.jsx'
export const Mycontext = createContext();

export const userContext = createContext();

function ComponentA() {

const [user, setUser] = useState("Don")

  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <userContext.Provider value={user}>
           <ComponentB user={user}/>
      </userContext.Provider>
    </div>
  )
}

export default ComponentA;
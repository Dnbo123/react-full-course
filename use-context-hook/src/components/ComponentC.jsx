import { useContext } from 'react'
import {userContext} from './ComponentA.jsx'
import ComponentD from './ComponentD.jsx'
function ComponentC() {
   
    const user = useContext(userContext);
  return (
    <div className="box">
    <h1>Component C</h1>
    <h2>{`You are going to be so successful ${user}`}</h2>
    <ComponentD />
  </div>
  )
}

export default ComponentC
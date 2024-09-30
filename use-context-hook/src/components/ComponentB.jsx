import { useContext } from 'react'
import {userContext} from './ComponentA.jsx'
import ComponentC from './ComponentC.jsx'

function ComponentB() {
    const user = useContext(userContext);
  return (
    <div className="box">
    <h1>Component B</h1>
    <h2>{`how are you doing ${user}`}</h2>
    <ComponentC />
  </div>
  )
}

export default ComponentB
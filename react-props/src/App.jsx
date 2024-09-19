//Props > Are read-only properties that are shared between components.
//        A parent component can send data to a child component.
//        <component key=value />

import Student from './components/Student'

function App() {
  
  return (
    <>
    <Student name="Don Bosco" age={23} isStudent={true}/>
    <Student name="Natasha Thogo" age={20} isStudent={false}/>
    <Student name="Felix Odhis" age={32} isStudent={false}/>
    <Student name="Caroline" age={24} isStudent={true}/>
    <Student />
    </>
  )
}

export default App;

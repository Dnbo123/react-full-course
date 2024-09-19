// Conditional rendering: Allows you to control what gets rendered 
 //                       in your apllication on certain conditions ie 
//                        (show, hide or change components)

import UserGreeting from './components/UserGreeting.jsx'

function App() {

  return (
    <>
    <UserGreeting isLoggedIn={false} username="Don Bosco"/>
    </>
  )
}

export default App;

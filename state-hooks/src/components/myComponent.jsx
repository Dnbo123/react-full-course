import React, {useState} from 'react'

function MyComponent() {
const [name, setName] = useState();
const [age, setAge] = useState();
const [isEmployed, setIsemployed] = useState();

const handleButtonClick = () => {
    setName("A winner");
    setAge(23);
}

const toggleIsEmployed = () => {
    setIsemployed(!isEmployed);
}

    return(
 <div>
    <p>Name: <b>{name}</b></p>
    <p>Age: {age}</p>
    <button onClick={handleButtonClick}>Click Me</button>
 
    <p>Employement: {isEmployed ? "Yes" : "No"}</p>
    <button onClick={toggleIsEmployed}>Employment Status</button>
 </div>
    );
}

export default MyComponent;
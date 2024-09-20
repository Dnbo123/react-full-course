
function Button() {
    let count = 0;
const handleClick = (name) => {
    if(count < 3) {
       count++;
       console.log(`${name} press me harder ${count} more time`)
    }else {
        console.log(`${name} there you Go!`)
    }
}

    return( 
        <button onClick={() => handleClick("Don")}>Click Me</button>
    )
}

export default Button;
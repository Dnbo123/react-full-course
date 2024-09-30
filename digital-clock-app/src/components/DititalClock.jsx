import React, {useState, useEffect} from 'react'

function DigitalClock() {

//Craeting state variables
const [time, setTime] = useState(new Date());

//Creating useEffect hooks
 useEffect(() => {
     const intervalId = setInterval(() => {
        //Updating the time every 1 second
        setTime(new Date());
     }, 1000);

     //Adding a clean-up function
     return () => {
        clearInterval(intervalId);
     }
 }, []);

 //Setting function to format time
       function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        //Setting the meridian(AM/PM)
        const meridiem = hours >= 12 ? "PM" : "AM" ;
        //Setting the hours in 12-hour format
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
       }

       //Function to ensure the second has 0 before a digit <10
           function padZero(number){
            return (number < 10 ? '0' : '') + number;
           }
  return (
   <div className="clock-container">
    <h1>Heyy BABY😊</h1>
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
   </div>
  )
}

export default DigitalClock;
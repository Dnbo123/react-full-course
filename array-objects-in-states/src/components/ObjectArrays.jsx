import React, {useState} from 'react';

function ObjectArrays(){
   const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"});

 function handleYearChange(event){
    //creating an array in object
   setCar(c => ({...c, year: event.target.value}));
};

function handleMakeChange(event){
    setCar(c => ({...c, make: event.target.value}));
 };

 function handleModelChange(event){
    setCar(c => ({...c, model: event.target.value}));
 };
   
    return(
        <div>
            <p>Your car is a: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} /> <br/>
            <input type="text" value={car.make} onChange={handleMakeChange} /> <br/>
            <input type="text" value={car.model} onChange={handleModelChange} /> <br/>
        </div>

    );
}

export default ObjectArrays;
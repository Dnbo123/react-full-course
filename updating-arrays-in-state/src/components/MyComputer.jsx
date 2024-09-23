import React, {useState} from 'react';

function MyComputer() {
 
    const [food, setFood] = useState(["Meat", "Chicken", "Greens"]);

    function handleAddFood(){
        const newFood = document.getElementById("AddInput").value;
        document.getElementById("AddInput").value = "";

        setFood(f => [...f, newFood]);


    }
    function handleRemoveFood(index){
        setFood(food.filter((_, i) => i !== index));

    }


    return(
   <div>
    <h2>List of Food Items</h2>
    <ul>
        {food.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}

    <input type="text" id="AddInput" placeholder="Food item" />
    <button onClick={handleAddFood}>Add</button>
    </ul>
   </div>
    );
}

export default MyComputer;
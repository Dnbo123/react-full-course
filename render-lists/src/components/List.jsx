
function List() {
  const fruits = [{id: 1, name: "Cococnut", calories:95}, 
                {id: 2, name: "Orange", calories:45}, 
                {id: 3, name: "Banana", calories:50}, 
                {id: 4, name: "PineApple", calories:87}];
                     
                      /*
                //Sorting list in alphabetical order
                fruits.sort((a, b) => a.name.localeCompare(b.name));
                        */
                       /*
                 //Sorting list in reverse-alphabetical order
                 fruits.sort((a, b) => b.name.localeCompare(a.name));
                        */
                //Sorting list in terms of calories in Numeric order
                fruits.sort((a, b) => a.calories -b.calories);

       const listItems= fruits.map(fruit => <li key={fruit.id}>
                                  {fruit.name}: &nbsp; 
                                  <b>{fruit.calories}</b></li>);

       return(<ul>{listItems}</ul>)
}

export default List;
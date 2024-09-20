import List from './components/List.jsx'

function App() {

  const fruits = [{id: 1, name: "Cococnut", calories: 95}, 
                  {id: 2, name: "Orange", calories: 45}, 
                  {id: 3, name: "Banana", calories: 50}, 
                  {id: 4, name: "PineApple", calories: 87}];

    const vegetables = [{id: 5, name: "Spinach", calories: 14}, 
                        {id: 6, name: "Brocolli", calories: 54}, 
                        {id: 7, name: "Canadian Loud", calories: 100}, 
                        {id: 8, name: "Lettuce", calories: 47}];
                    
   const spice = [{id: 5, name: "Garlic", calories: 20}, 
                      {id: 6, name: "Corriander", calories: 0.1}, 
                      {id: 7, name: "Cayenne", calories: 10}, 
                      {id: 8, name: "Black pepper", calories: 17}];

  return (
    <>
     <List items={fruits} category="Fruits"/>
     <List items={vegetables} category="Vegetables"/>
     <List items={spice} category="Spices"/>
    </>
  );
}

export default App;


       
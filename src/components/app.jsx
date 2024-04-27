import React, { useState } from "react";
import ToDoItem from "./toDoItem";
import Input from "./input";

function App() {
    const [ items,setItems] = useState([]); //creating  a state variable for our list(array) of tasks.

    function addItem(inputText){
        setItems(prevItems => {                  // addItem function  is used to add new task in the array using setItem 
            return [...prevItems, inputText];
        });
    }

    function  deleteItem(itemIndex) {
      setItems( prevItems => {
        return prevItems.filter(                //deleteItem used to delete the selected task from the array based on the index 
          (items,index) => {                        //retrived from the toDoItem jsx file
            return  index !== itemIndex;
          }
      )
      })
      };


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div> 

      <Input onAdd = {addItem}/>    {/* calling input component  and passing a callback function */}
    
      <div>
        <ul>
          {items.map((todoItem,index) =>    //calling ToDoItem component  and passing props in it.
            <ToDoItem 
            item={todoItem} 
            key={index} 
            id={index} 
            onChecked = {deleteItem}    // passing an event handler onChecked  which is calling deleteItem function
            />
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;

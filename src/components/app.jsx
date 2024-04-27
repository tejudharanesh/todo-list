import React, { useState } from "react";
import ToDoItem from "./toDoItem";

function App() {
    const [ inputText, setInputText] = useState("");
    const [ items,setItems] = useState([]);

    function handleChange(event){
        const newvalue = event.target.value;
        setInputText(newvalue);
    }

    function addItem(){
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
        setInputText("");
    }

    function  deleteItem(itemIndex) {
      setItems( prevItems => {
        return prevItems.filter(
          (items,index) => {
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
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem,index) => 
            <ToDoItem 
            item={todoItem} 
            key={index} 
            id={index} 
            onChecked = {deleteItem}
            />
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;

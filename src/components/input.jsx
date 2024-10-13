import React, { useState } from "react";

function Input(props){
    const [ inputText, setInputText] = useState("");  //creating hook for the text field

    function handleChange(event){
        const newvalue = event.target.value;
        setInputText(newvalue);
    }

    return(
    <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick= { () =>{
            props.onAdd(inputText);
            setInputText("");
        }
        }>
          <span>Add item</span>
        </button>
      </div>
      );
}

export default Input;

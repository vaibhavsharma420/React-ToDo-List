import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App=()=>{

    const[userInput, newInput]= useState("");
    const [items,setItems]= useState([]);

    const itemEvents=(preValue)=>{
        newInput(preValue.target.value);
    };

    
    const listItems=()=>{
        setItems((oldItems)=>{
            return [...oldItems, userInput];
        });
        newInput("");
    };

    const deleteItems=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrayElem,index)=>{
                return index!==id;
            })
        });
    }
    

    return(
        <>
    <div className="main_div">
    <div className='center_div'>
    <br/>
    <h1>ToDo List</h1>
    <br/>
    <input 
    type="text" 
    placeholder='Add an item'
    value={userInput}
    onChange={itemEvents}
    
    />
    <button onClick={listItems}> + </button>

    <ol>
        {items.map((itemValue,index)=>{
          return <ToDoList
          key={index} id={index}
            text={itemValue}
            onSelect={deleteItems}
           />
        })}
    </ol>

    </div>

    </div>
        </>
    );
};

export default App;
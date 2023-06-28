import React, { useState } from 'react'
import ItemList from './ItemList';
import "./ToDo.css";
import { useOnKeyPress } from "./../../hooks/useOnKeyPress";


export default function ToDo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setText(event.target.value)
    // console.log(event.target.value)
  };

  const submitInput = (event) => {
    console.log("submitted")
    console.log(text);

    setItems([...items, text])
    setText("");
    console.log(items);
  };

  const deleteItem = (id) => {
    console.log("deleted");

    setItems((items) => {
      return items.filter((items, index) => {
        return index !== id;
      })
    })
  }

  // using hooks(useEffect) to add functionality...when enter is pressed, the todo item is submitted.
  useOnKeyPress(submitInput, "Enter");
  return (
    <>
      <div className='container d-flex justify-content-center flex-column align-items-center'>
        <h1 className='text-center todo-heading'>TODO APP</h1>
        <div className='d-flex justify-content-between align-items-center'>
          <input className='todo-input' type="text" placeholder='Enter' onChange={handleInputChange} value={text}></input>
          <i className="fa-solid fa-circle-info info-btn todo-input-icon"></i>
          <span className="todo-input-help-txt">Enter Tasks eg. Meeting at 2pm, write a blog etc.</span>
          <button className='btn todo-submit font-weight-bold' onClick={submitInput}>Submit</button>
        </div>

        <ol className='unorderedlist'>
          {items.map((itemval, index) => {
            return <ItemList key={index} totalItems={itemval} id={index} del={deleteItem} />
          })}

        </ol>
      </div>
    </>
  )
}

import './App.css';
import React, { useState, useEffect } from 'react';
import add from './add.png';
import del from './delete.png';

function App() {

  const getData = () => {
    const myData = JSON.parse(localStorage.getItem("myList"));
    if (myData) {
      return myData;
    }
    return [];
  }

  const [inputItem, setInputItem] = useState('');
  const [items, setItems] = useState(getData());

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(items));
  }, [items])


  const AddItem = () => {
    if (!inputItem) {
      alert("Enter Something...!!!");
      return;
    }
    setItems([...items, inputItem]);
    setInputItem("");
  }

  const DeleteItem = (id) => {
    const array = items.filter((key, index) => {
      return (id !== index)
    })
    setItems(array);
  }

  const DeleteAll = () => {
    setItems([]);
  }

  return (
    <div className="App">
      <div className="app-todo">
        <h1>ToDo</h1>
        <div className="input-buttons">
          <input
            className='todo-input'
            value={inputItem}
            type="text"
            onChange={(e) => { setInputItem(e.target.value) }}
          />
          <img src={add} onClick={AddItem} />
          <img src={del} onClick={DeleteAll} />
        </div>
        <button className='add-button' onClick={AddItem}>Add</button>
        <button className='add-button' onClick={DeleteAll}>Delete All</button>
      </div>
      <div className='app-card'>
        {
          items.map((key, index) => {
            return <>
              <div className="card">
                <div className="card-head">{index + 1})&emsp;{key}
                  <div className='delete-div' onClick={() => DeleteItem(index)}>
                    <img src={del} />
                  </div>
                </div>
              </div>
            </>



            // <li key={index}>{key} <button onClick={() => DeleteItem(index)}>Delete</button></li>
          })
        }
      </div>
    </div>
  );
}

export default App;

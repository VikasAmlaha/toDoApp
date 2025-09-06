import React from 'react';
import ReactDOM from 'react-dom';
// import './style.css';

// let tasks = []
// const Add = () => {
//   tasks.append();
// }

// ReactDOM.render(
//   <h1>Hello, React!</h1>,
//   document.getElementById('root')
// );

import React, { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");       // for input field
  const [list, setList] = useState([]);       // to store list of items

  const handleAdd = () => {
    if (item.trim() !== "") {
      setList([...list, item]);   // add new item to list
      setItem("");                // clear input field
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Add Items</h1>
      
      {/* Input field */}
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item"
        className="border p-2 rounded mr-2"
      />

      {/* Button */}
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>

      {/* Show list */}
      <ul className="mt-4 list-disc pl-5">
        {list.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  );
}

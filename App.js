
import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const handleAddItem = () => {
    if (item.trim() !== '') {
      setList([...list, item]);
      setItem(''); // Clear the input field
    }
  };

  return (
    <div className="App">
      <h1>Item List</h1>
      <div className="input-container">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter item"
          className="input-field"
        />
        <button onClick={handleAddItem} className="add-button">Add Item</button>
      </div>
      <div className="list-container">
        {list.length > 0 ? (
          <ul>
            {list.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
        ) : (
          <p>No items in the list</p>
        )}
      </div>
    </div>
  );
}

export default App;

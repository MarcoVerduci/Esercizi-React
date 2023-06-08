import React, { useState } from 'react';

export function TodoList() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleInputChange = (event) => {
        setNewItem(event.target.value);
    };

    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const handleReset = () => {
        setItems([]);
    };

    return (
        <div>
            <input
                type="text"
                value={newItem}
                onChange={handleInputChange}
            />
            <button onClick={handleAddItem}>Add</button>
            <button onClick={handleReset}>Reset</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

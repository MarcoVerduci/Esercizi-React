import React, { useState } from 'react';

export function TodoList() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleInputChange = (e) => {
        setNewItem(e.target.value);
    };

    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const handleRemoveItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const handleReset = () => {
        setItems([]);
    };

    const renderList = () => (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleRemoveItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div>
            <input type="text" value={newItem} onChange={handleInputChange} />
            <button onClick={handleAddItem}>Add</button>
            <button onClick={handleReset}>Reset</button>
            {renderList()}
        </div>
    );
};

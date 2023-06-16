import React, { useState } from 'react';

export function CarDetails() {
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Model:', model);
        console.log('Year:', year);
        console.log('Color:', color);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="model">Model:</label>
            <input
                type="text"
                id="model"
                name="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
            />

            <label htmlFor="year">Year:</label>
            <input
                type="text"
                id="year"
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />

            <label htmlFor="color">Color:</label>
            <input
                type="text"
                id="color"
                name="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

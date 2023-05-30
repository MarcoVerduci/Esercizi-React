import React, { useState } from "react";

export function ClickTracker() {
    const [lastButtonPressed, setLastButtonPressed] = useState('');

    const handleButtonClick = (event) => {
        const buttonName = event.target.name;
        setLastButtonPressed(buttonName);
    };

    return (
        <div>
            <h1>Last Button Pressed: {lastButtonPressed}</h1>
            <button name='Button 1' onClick={handleButtonClick}>1</button>
            <button name='Button 2' onClick={handleButtonClick}>2</button>
            <button name='Button 3' onClick={handleButtonClick}>3</button>
        </div>
    )
}
import React, { useState, useEffect } from "react";

export function ClickCounter({ onCounterChange }) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        onCounterChange(count);
    }, [count, onCounterChange]);

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={incrementCount}>+</button>
        </div>
    );
}
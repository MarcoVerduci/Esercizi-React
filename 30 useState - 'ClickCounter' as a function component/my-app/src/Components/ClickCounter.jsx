import React, { useState } from "react";

export function ClickCounter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}
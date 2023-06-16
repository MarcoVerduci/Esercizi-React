import React, { useCallback } from 'react';

export function Counter() {
    const { count, increment, decrement, reset } = useCounter();

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

const useCounter = () => {
    const [count, setCount] = React.useState(0);

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount((prevCount) => prevCount - 1);
    }, []);

    const reset = useCallback(() => {
        setCount(0);
    }, []);

    return {
        count,
        increment,
        decrement,
        reset
    };
};
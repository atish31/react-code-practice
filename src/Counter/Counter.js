import { useState } from "react";

export const Counter = () => {
    const initialState = 0;
    const [count, setCount] = useState(initialState);
    const maxLimit = Math.pow(2, 32);
    const minLimit = 0;
    const increment = () => {
        if(count > maxLimit) {
            return;
        }
        let newCount = count + 1;
        setCount(newCount);
    }
    const decrement = () => {
        if(count === minLimit) {
           return;
        }
        let newCount = count - 1;
        setCount(newCount);        
    }
    const reset = () => {
        setCount(initialState);
    }
    return (
        <>
            <p>
                {count}
            </p>
            <button onClick={increment}>
                +
            </button>

            <button onClick={decrement}>
                -
            </button>

            <button onClick={reset}>
                Reset
            </button>

        </>
    )
}
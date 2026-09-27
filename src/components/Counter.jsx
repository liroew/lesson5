import { useState } from "react";
import { useCallback } from "react";
import { ChildButton } from "./ChildButton";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback (() => {
        setCount(prev => prev + 1);
    }, []);

    return (
        <div>
            <h2>Count: {count} </h2>
            <ChildButton onClick={handleClick} label='+'></ChildButton>
        </div>
    )
};
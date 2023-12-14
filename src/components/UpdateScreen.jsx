import { useState } from "react";

export const UpdateScreen = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count+1);
        console.log(count);
    }


    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClick}>+1</button>
        </>
    )
}

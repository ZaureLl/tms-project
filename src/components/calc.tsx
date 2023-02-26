import React, { useState } from "react";



const Calc = () => {
    const [count, setCount] = useState(0);

    // const us = useState(0);
    // const count = us[0]

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
    }


    return (
        <div>
            <button onClick={incrementCount}>+</button>
            <span>{count}</span>
            <button onClick={decrementCount}>-</button>
        </div>
    )

}

export default Calc;
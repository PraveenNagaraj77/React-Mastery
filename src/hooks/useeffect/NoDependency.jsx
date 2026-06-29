import React, { useEffect, useState } from "react";

const NoDependency = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log(`Current Count: ${count}`);

    });

    return (
        <div>

            <h1>No Dependency Array</h1>

            <h2>Count : {count}</h2>

            <button
                onClick={() => setCount(prev => prev + 1)}
            >
                Increment
            </button>

        </div>
    );
};

export default NoDependency;
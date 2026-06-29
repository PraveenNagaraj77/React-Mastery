import React, { useEffect, useState } from "react";

const ArrayDependency = () => {

    const [fruits, setFruits] = useState([
        "Apple",
        "Orange"
    ]);

    useEffect(() => {

        console.log("Fruit List Updated");

    }, [fruits]);

    function addFruit() {

        setFruits(prev => [...prev, "Mango"]);

    }

    return (

        <div>

            <h1>Array Dependency</h1>

            <ul>

                {
                    fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))
                }

            </ul>

            <button onClick={addFruit}>
                Add Fruit
            </button>

        </div>

    );

};

export default ArrayDependency;
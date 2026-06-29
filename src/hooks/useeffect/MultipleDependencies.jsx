import React, { useEffect, useState } from "react";

const MultipleDependencies = () => {

    const [name, setName] = useState("Praveen");
    const [age, setAge] = useState(24);

    useEffect(() => {

        console.log("Effect Executed");

        document.title = `${name} - ${age}`;

    }, [name, age]);

    return (
        <div>

            <h1>Multiple Dependencies</h1>

            <h2>Name : {name}</h2>

            <button
                onClick={() => setName("React Developer")}
            >
                Change Name
            </button>

            <hr />

            <h2>Age : {age}</h2>

            <button
                onClick={() => setAge(prev => prev + 1)}
            >
                Increase Age
            </button>

        </div>
    );
};

export default MultipleDependencies;
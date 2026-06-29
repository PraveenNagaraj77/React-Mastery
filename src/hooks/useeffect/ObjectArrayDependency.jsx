import React, { useEffect, useState } from "react";

const ObjectArrayDependency = () => {

    const [user, setUser] = useState({
        name: "Praveen",
        age: 24
    });

    useEffect(() => {

        console.log("User Updated");

    }, [user]);

    function updateAge() {

        setUser({
            ...user,
            age: user.age + 1
        });

    }

    return (
        <div>

            <h1>Object Dependency</h1>

            <h2>Name : {user.name}</h2>

            <h2>Age : {user.age}</h2>

            <button onClick={updateAge}>
                Increase Age
            </button>

        </div>
    );
};

export default ObjectArrayDependency;
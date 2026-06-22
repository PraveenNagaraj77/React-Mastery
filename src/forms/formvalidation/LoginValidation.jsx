import React, { useState } from 'react';

const LoginValidation = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function handleEmailChange(event) {
        const value = event.target.value;

        setEmail(value);

        if (!value.includes("@")) {
            setEmailError("Email must contain @");
        } else {
            setEmailError("");
        }
    }

    function handlePasswordChange(event) {
        const value = event.target.value;

        setPassword(value);

        if (value.length < 8) {
            setPasswordError(
                "Password must be at least 8 characters"
            );
        } else {
            setPasswordError("");
        }
    }

    function handleSubmit(event) {

        event.preventDefault();

        let isValid = true;

        if (!email.includes("@")) {
            setEmailError("Email must contain @");
            isValid = false;
        }

        if (password.length < 8) {
            setPasswordError(
                "Password must be at least 8 characters"
            );
            isValid = false;
        }

        if (isValid) {
            alert("Login Successful");

            console.log("Email:", email);
            console.log("Password:", password);

            setEmail("");
            setPassword("");
        }
    }

    return (
        <div>
            <h1>Login Form Validation</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Email</label>
                    <br />

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={handleEmailChange}
                    />

                    {emailError && (
                        <p>{emailError}</p>
                    )}
                </div>

                <br />

                <div>
                    <label>Password</label>
                    <br />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />

                    {passwordError && (
                        <p>{passwordError}</p>
                    )}
                </div>

                <br />

                <button
                    type="submit"
                    disabled={
                        !email.includes("@") ||
                        password.length < 8
                    }
                >
                    Login
                </button>

            </form>
        </div>
    );
};

export default LoginValidation;
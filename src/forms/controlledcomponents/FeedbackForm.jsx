import React, { useState } from 'react'

const FeedbackForm = () => {

    const [name, setName] = useState("");
    const [feedback, setFeedback] = useState("");

    const [submittedName, setSubmittedName] = useState("");
    const [submittedFeedback, setSubmittedFeedback] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        setSubmittedName(name);
        setSubmittedFeedback(feedback);

        setName("");
        setFeedback("");
    }

    return (
        <div>
            <h1>Feedback Form</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <br />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>

                <br />

                <div>
                    <label>Feedback: </label>
                    <br />
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                </div>

                <br />

                <button type="submit">
                    Submit
                </button>
            </form>

            <hr />

            <h3>Preview</h3>
            <p>Name: {submittedName}</p>
            <p>Feedback: {submittedFeedback}</p>

        </div>
    )
}

export default FeedbackForm
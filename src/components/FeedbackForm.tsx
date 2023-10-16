import React, { useCallback, useState } from "react";

function FeedbackForm({ setFeedbacks }: any) {
    const [feedbackText, setFeedbackText] = useState("");
    const [tncBox, setTncBox] = useState(false);

    const handleFeedbackTextChange = useCallback((event: any) => {
        setFeedbackText(event.target.value);
    }, []);

    const submitFeedback = useCallback(() => {
        setFeedbacks((prev: any) => [
            ...prev,
            { id: Date.now(), feedbackText },
        ]);
        setFeedbackText("");
    }, [feedbackText, setFeedbacks]);

    return (
        <div>
            <h1>Feedback Form</h1>
            <input
                type="text"
                value={feedbackText}
                placeholder="Enter your feedback here"
                onChange={handleFeedbackTextChange}
            />

            <input
                id="tncBox"
                type="checkbox"
                defaultChecked={tncBox}
                onChange={() => setTncBox(!tncBox)}
            />
            <label htmlFor="tncBox">I accept the Terms and Conditions</label>

            <button
                disabled={!tncBox || !feedbackText}
                onClick={submitFeedback}
            >
                Add Feedback
            </button>
        </div>
    );
}

export default FeedbackForm;

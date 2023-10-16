import { useState } from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackOverview from "./components/FeedbackOverview";

function App() {
    const [feedbacks, setFeedbacks] = useState([]);

    return (
        <div data-testid="parent-container">
            <FeedbackForm setFeedbacks={setFeedbacks} />
            <FeedbackOverview feedbackList={feedbacks} />
        </div>
    );
}

export default App;

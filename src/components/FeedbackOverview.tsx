import React from "react";

function FeedbackOverview({ feedbackList }: any) {
    if (feedbackList.length === 0) {
        return <h2>No Feedback Found</h2>;
    }

    return (
        <div>
            <h2>Feedback Overview</h2>
            <ul>
                {feedbackList.map((feed: any) => (
                    <li key={feed.id}>{feed.feedbackText}</li>
                ))}
            </ul>
        </div>
    );
}

export default FeedbackOverview;

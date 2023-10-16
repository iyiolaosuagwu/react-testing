/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import FeedbackOverview from "../components/FeedbackOverview";

const ArrayList = [
    {
        id: 1,
        feedbackText: "text 1",
    },
    {
        id: 2,
        feedbackText: "text 2",
    },
];

test("No Feedback List Found Scenero", () => {
    render(<FeedbackOverview feedbackList={[]} />);
    const feedbackNotFound = screen.getByText("No Feedback Found", {
        exact: false,
    });
    expect(feedbackNotFound).toBeInTheDocument();
});

test("Feedback List Found Scenero", () => {
    render(<FeedbackOverview feedbackList={ArrayList} />);

    const feedbackNotFound = screen.queryByTestId("No Feedback Found", {
        exact: false,
    });
    expect(feedbackNotFound).not.toBeInTheDocument();

    // test list item
    const li1 = screen.getByText("text 1");
    const li2 = screen.getByText("text 1");

    expect(li1).toBeInTheDocument();
    expect(li2).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(ArrayList.length);
});

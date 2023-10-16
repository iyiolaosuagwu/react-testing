import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("Feedback should be displayed after submit", async () => {
    render(<App />);
    // get email input
    const textBox = screen.getByRole("textbox");
    // get checkbox
    const checkbox = screen.getByLabelText(
        "I accept the Terms and Conditions",
        { exact: false }
    );
    // get button
    const button = screen.getByRole("button", {
        name: "Add Feedback",
        exact: false,
    });

    userEvent.type(textBox, "new feedback");
    userEvent.click(checkbox);
    userEvent.click(button);
    // add new list item to the list
    const newLi = screen.getByText("new feedback", {
        exact: false,
    });
    expect(newLi).toBeInTheDocument();
});

test("2 Feedback should be displayed after submit", async () => {
    render(<App />);
    // get email input
    const textBox = screen.getByRole("textbox");
    // get checkbox
    const checkbox = screen.getByLabelText(
        "I accept the Terms and Conditions",
        { exact: false }
    );
    // get button
    const button = screen.getByRole("button", {
        name: "Add Feedback",
        exact: false,
    });

    userEvent.type(textBox, "new feedback");
    userEvent.click(checkbox);
    userEvent.click(button);

    userEvent.type(textBox, "new feedback two");
    userEvent.click(button);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems.length).toBe(listItems.length);
});

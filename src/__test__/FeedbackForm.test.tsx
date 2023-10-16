/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FeedbackForm from "../components/FeedbackForm";

describe("Test relating to feedback component", () => {
    test("Onload condition for form", async () => {
        render(<FeedbackForm />);

        // get email input
        const textBox = screen.getByRole("textbox");
        expect(textBox).toBeInTheDocument();

        // get checkbox
        const checkbox = screen.getByLabelText(
            "I accept the Terms and Conditions",
            { exact: false }
        );
        expect(checkbox).toBeInTheDocument();

        // get button to check if its in the dom an ddisabled
        const button = screen.getByRole("button", {
            name: "Add Feedback",
            exact: false,
        });
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    });

    test("Button enables only if input and checkbox has values", async () => {
        render(<FeedbackForm />);
        const input = screen.getByPlaceholderText("Enter your feedback here");
        const checkbox = screen.getByLabelText(
            "I accept the Terms and Conditions",
            { exact: false }
        );
        const button = screen.getByRole("button", {
            name: "Add Feedback",
            exact: false,
        });

        // first click of the checkbox
        userEvent.type(input, "Hello iyiola");
        userEvent.click(checkbox);

        expect(button).toBeEnabled();

        // on second click of the checkbox
        userEvent.click(checkbox);
        expect(button).toBeDisabled();
    });
});

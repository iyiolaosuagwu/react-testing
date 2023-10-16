import React from "react";
import { render, screen, logRoles } from "@testing-library/react";
import App from "./App";

test.skip("renders learn react link", () => {
    render(<App />);
    const btnElement = screen.getByRole("button", {
        name: "Click here",
        exact: false,
    });
    expect(btnElement).toBeInTheDocument();
});

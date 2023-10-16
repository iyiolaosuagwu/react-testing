// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
    rest.post("/login", (req, res, ctx) => {
        return res(
            ctx.json({
                id: Date.now(),
                feedbackText: req.body.feedbackText,
            })
        );
    }),
];

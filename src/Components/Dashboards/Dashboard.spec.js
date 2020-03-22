import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Dashboard";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("display page", () => {
    test("displays dashboard", () => {
        const wrapper = rtl.render(
            <Router>
                <Dashboard />
            </Router>
        );
        const title = wrapper.getByRole(/dashboard/i);
        expect(title).toBeInTheDocument();
        expect(title).toBeVisible();
    });
});

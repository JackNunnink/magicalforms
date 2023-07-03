import React from "react";
import { createRoot } from "react-dom/client";
import Form from "./form";

export default function TestPage() {
    return (
        <div>
            <h1>Test Page</h1>
            <Form action="https://www.google.com" redirect="_blank">
                <input type="text" name="q" placeholder="name" />
                <input type="submit" value="Search" />
            </Form>
        </div>
    );
}

const container = document.getElementById("app");
const root = createRoot(container)

root.render(<TestPage />);


import { createRoot } from "react-dom/client";
import { TestPage } from "./src/test-page";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<TestPage />);
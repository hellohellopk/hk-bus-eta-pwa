import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerPwa } from "./pwa";

createRoot(document.getElementById("root")!).render(<App />);
registerPwa();

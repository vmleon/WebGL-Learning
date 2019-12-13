import "../index.css";
import app from "./app";
import { createRoot } from "./el";

export const canvasId = "webgl-canvas";

document.body.appendChild(createRoot(canvasId));
window.onload = app(canvasId);

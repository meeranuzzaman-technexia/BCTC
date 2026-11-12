import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactLenis } from "lenis/react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* SCROLL SPEED — tweak in main.jsx:
        lerp            : smoothness (0.01–0.2). Higher = snappier/faster, lower = slower & floatier.
        wheelMultiplier : mouse-wheel travel per notch (1 = normal). <1 slower, >1 faster.
        Examples — normal: { lerp: 0.09, wheelMultiplier: 1 } | current: { lerp: 0.05, wheelMultiplier: 0.7 } | cinematic: { lerp: 0.035, wheelMultiplier: 0.5 } */}
    <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 0.7, smoothWheel: true }}>
      <App />
    </ReactLenis>
  </StrictMode>
);

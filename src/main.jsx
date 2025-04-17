/**
 * @copyright codewithsadee
 * @license Apache-2.0
 */


import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

import { ReactLenis, useLenis } from 'lenis/react'



import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("❌ Root element not found");
}
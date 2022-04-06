import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

if (document === null) throw new Error("Document is null.");
const rootDiv = document.getElementById("root");
if (rootDiv === null) throw new Error("Root div couldn't be found.")
const root = createRoot(rootDiv);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}

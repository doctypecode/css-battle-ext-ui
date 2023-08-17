import React from "react";
import ReactDOM from "react-dom/client";
import "../assets/css/common.css";
import { BUTTON_SELECTOR, getButtonContainer } from "./utils/dom";
import MinifyButton from "./MinifyButton";

// Create Entry Point For React App
const ContentScriptInsertionPoint = document.createElement("div");
ContentScriptInsertionPoint.id = "contentScriptInsertionPoint";

const AppContainer = getButtonContainer();

if (AppContainer) {
  // Add the entry point to dom
  AppContainer.appendChild(ContentScriptInsertionPoint);

  const root = ReactDOM.createRoot(ContentScriptInsertionPoint);

  // Render App in the entry point
  root.render(
    <React.StrictMode>
      <MinifyButton />
    </React.StrictMode>
  );
} else {
  document.arrive(BUTTON_SELECTOR, (element) => {
    element.appendChild(ContentScriptInsertionPoint);

    const root = ReactDOM.createRoot(ContentScriptInsertionPoint);

    // Render App in the entry point
    root.render(
      <React.StrictMode>
        <MinifyButton />
      </React.StrictMode>
    );
  });
}

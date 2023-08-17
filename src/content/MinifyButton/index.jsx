/* global chrome */

import React from "react";
import { getRawHTML } from "../utils/dom";

const MinifyButton = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // Listen To BS Messages
    chrome.runtime.onMessage.addListener((payload) => {
      switch (payload.identifier) {
        case "REPLACE_HTML":
          document.querySelector('[role="textbox"]').innerText =
            payload.data.minified;
          setLoading(false);
          break;
      }
    });
  }, []);

  const handleMinify = async () => {
    setLoading(true);
    const html = await getRawHTML();

    chrome.runtime.sendMessage("", {
      type: "api-call",
      method: "POST",
      body: {
        html,
      },
      endpoint: "/minify",
    });
  };

  return (
    <button
      className="button"
      type="button"
      onClick={handleMinify}
      disabled={loading}>
      Minify HTML
    </button>
  );
};

export default MinifyButton;

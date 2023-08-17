/* global chrome */

const doRequest = ({ method, endpoint, body }) => {
  return fetch(`http://localhost:3001/api${endpoint}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const sendMessageToCS = (tabId, payload) => {
  chrome.tabs.sendMessage(tabId, { ...payload });
};

chrome.runtime.onMessage.addListener(function (request, sender) {
  let tabId = sender.tab.id;
  if (request.type === "api-call") {
    doRequest(request)
      .then((res) => res.json())
      .then((data) => {
        sendMessageToCS(tabId, { identifier: "REPLACE_HTML", data });
      });
  }
});

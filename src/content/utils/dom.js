export const BUTTON_SELECTOR = ".btn-group--with-background > .btn-group";

export const getButtonContainer = () => {
  return document.querySelector(BUTTON_SELECTOR);
};

export const getRawHTML = () => {
  // Get all available lines
  const linesNodeList = document
    .querySelector('[role="textbox"]')
    .querySelectorAll(".cm-line");

  const lines = [...linesNodeList];

  // Add Arrive Event
  document.arrive('[role="textbox"] .cm-line', (line) => {
    lines.push(line);
  });

  scrollConatinerToBottom();

  let innerText = "";

  return new Promise((resolve) => {
    setTimeout(() => {
      lines.forEach((line) => {
        innerText += line.innerText;
      });
      resolve(innerText);
    }, 1000);
  });
};

const scrollConatinerToBottom = () => {
  const cmScroller = document.querySelector(".cm-scroller");
  if (cmScroller) cmScroller.scrollTop = cmScroller.scrollHeight;
};

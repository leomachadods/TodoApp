const container = document.querySelector("#todos");

function createTextArea() {
  const textarea = document.createElement("textarea");
  textarea.className = "todoTextArea";
  textarea.maxLength = 100;
  textarea.title = "todoTextArea";
  textarea.placeholder = "Enter a text";
  textarea.addEventListener("keydown", handleTextAreaKeyDown);
  container.appendChild(textarea);
  textarea.focus();
}

function handleTextAreaKeyDown(event) {
  if (event.key !== "Enter") return;
  event.preventDefault();

  if (!event.target.value) return;
  event.target.remove();
  createTodo(event);
  createTextArea();
}

function createTodo(event) {
  const todo = document.createElement("div");
  todo.className = "todo";

  const checkContainer = document.createElement("div");
  const cancelContainer = document.createElement("div");

  const checkButton = createCheckButton();
  const cancelButton = createCancelButton();

  const pElement = document.createElement("p");
  pElement.innerHTML = event.target.value;
  pElement.style.padding = "10px";
  pElement.style.whiteSpace = "wrap";

  checkContainer.appendChild(checkButton);
  cancelContainer.appendChild(cancelButton);

  todo.appendChild(checkContainer);
  todo.appendChild(pElement);
  todo.appendChild(cancelContainer);

  container.appendChild(todo);
}

function createCheckButton() {
  const checkButton = document.createElement("img");
  checkButton.src = "./icons/Ellipse 3.png";
  checkButton.className = "checkButton";
  checkButton.title = "Check Button";
  checkButton.style.cursor = "pointer";
  checkButton.addEventListener("click", handleCheckButtonClick);

  return checkButton;
}

function handleCheckButtonClick(event) {
    let pElement =
      event.target.parentElement.parentElement.getElementsByTagName("p")[0];

    if (event.target.src.includes("Ok.png")) {
      event.target.src = "./icons/Ellipse 3.png";
      pElement.classList.remove("strike");
    } else {
      event.target.src = "./icons/Ok.png";
      pElement.classList.add("strike");
    }
}

function createCancelButton() {
    const cancelButton = document.createElement("img");
    cancelButton.src = "./icons/Cancel.png";
    cancelButton.className = "cancelButton";
    cancelButton.title = "Cancel Button";
    cancelButton.style.cursor = "pointer";
    cancelButton.addEventListener("click", handleCancelButtonClick);

    return cancelButton;
}

function handleCancelButtonClick(event) {
    event.target.parentElement.parentElement.remove();
}

if (!container.children.length) {
    createTextArea();
}

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});
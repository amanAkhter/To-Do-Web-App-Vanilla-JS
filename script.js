// Author : Aman Akhter

const addBtn = document.getElementById("addBtn");

const taskText = document.getElementById("taskText");

const listContent = document.getElementById("listContent");
const listText = document.getElementById("listText");

const listCheck = document.getElementById("listCheck");

const mainList = document.getElementById("mainList");

let idCount = 0;

// -> add button onclick event listener
addBtn.addEventListener("click", () => {
  if (taskText.value != "") {
    addingItem();
  }
});

// -> for handling the trigger of addBtn on 'enter key press'
taskText.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    if (taskText.value!="") {
      addingItem();
    }
  }
});

const addingItem = () => {
  addItem();
  taskText.value = "";
};

// -> function for adding(cloning) a new element with a dynamic different id from input
const addItem = () => {
  const text = taskText.value;

  cloneElement(text);
};

// -> for handling the no task at the start
if (idCount == 0) {
  mainList.innerHTML = "";
}

// -> function for cloning element
const cloneElement = (text) => {
  // making the id's count go up as new elements are formed so the id will be assigned dynamically
  idCount++;

  const clonedElem = listContent.cloneNode(true);
  listContent.remove();

  clonedElem.id = `listContent${idCount}`;
  clonedElem.childNodes[3].id = `listCheck${idCount}`;

  clonedElem.childNodes[1].innerText = text;

  mainList.appendChild(clonedElem);
};

// -> function for removing element on checked
const onCheckedRemove = (checkbox) => {
  if (checkbox.checked == true) {
    const toRemoveElem = document.getElementById(checkbox.parentElement.id);

    toRemoveElem.childNodes[1].style.textDecoration = "line-through";
    setTimeout(() => {
      toRemoveElem.remove();
    }, 1500);
  } else {
    console.log("Nothing happened");
  }
};

// DOM variables
const form = document.getElementById("form");
const itemList = document.getElementById("items");
const newItem = document.getElementById("input-value");

// input field focus on load and autocomplete off
newItem.focus();
newItem.autocomplete = "off";

// form submit event
form.addEventListener("submit", addItem);
// delete btn event
itemList.addEventListener("click", deleteItem);
// input event
// newItem.addEventListener("input", changeText);

// addItem function
function addItem(e) {
  e.preventDefault();

  // check input value is not empty
  if (newItem.value !== "") {
    // create new li element
    const li = document.createElement("li");
    // add class name to the li item
    li.className = "list-group-item text-secondary lead bg-light";
    // add text node with input value
    li.appendChild(document.createTextNode(newItem.value));
    // append li child to the list group
    itemList.appendChild(li);
    // create the delete btn
    const delBtn = document.createElement("button");
    // add classes to the btn
    delBtn.className = "btn btn-default btn-sm float-right delete";
    // create text node
    delBtn.appendChild(document.createTextNode("x"));
    // append btn to li
    li.appendChild(delBtn);

    // clear the input field
    form.reset();
  } else {
    // alert the user to input something
    alert("Please add something to the list.");
  }
  if (itemList.innerHTML !== "") {
    document.getElementById("title").innerHTML = "List Items";
    document.getElementById("lead").style.display = "none";
  }
}

// delete item function
function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure to delete the item?")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
  if (itemList.innerHTML === "") {
    document.getElementById("title").innerHTML = "No Items";
    document.getElementById("lead").style.display = "block";
  }
}

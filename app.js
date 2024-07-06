let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
  let inputValue = inp.value.trim();
  if (inputValue!== "") {
    let item = document.createElement("li");
    item.innerText = inputValue;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("Delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";

    // Disable the button to prevent multiple clicks
    btn.disabled = true;
    setTimeout(() => {
      btn.disabled = false;
    }, 500);
  }
});

ul.addEventListener("click", function(event) {
  if (event.target.nodeName === "BUTTON" && event.target.classList.contains("Delete")) {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("task-container");

function addTask(){
    if(inputBox.value === ''){ 
    alert("add your task");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML ="\u00d7";
    li.appendChild(span);
}
inputBox.value="";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        if (e.target.classList.contains("checked")) {
            e.target.style.backgroundImage = "url(checked.jpg)";
        } else {
            e.target.style.backgroundImage = "url(unchecked.png)";
        }
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
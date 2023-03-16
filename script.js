var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("shopList");

function inputLength() {
  return input.value.length > 0;
}

function createListElement(){
  var div = document.createElement("div");
  var li = document.createElement("li");
  var delButton = document.createElement("button");
  div.classList.add("wrapper");
  ul.appendChild(div);
  div.append(li, delButton);
  li.classList.add("taskClass");
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
  delButton.classList.add("delClass");
  delButton.innerHTML="Del";
}

function addListAfterClick(){
    if (inputLength()){
      createListElement();
    } else{
      alert("Please enter something in das box :<")
    }
}

function addListAfterKeypress(event){
    if (inputLength() && event.code === "Enter"){
      createListElement();
    } else if (!inputLength() && event.code === "Enter"){
      alert("Please enter something in das box :<")
    }
}

function delButtonClick(element){
  if(element.target.classList.value === "delClass"){
    element.target.parentElement.remove();
  }

}

function itemClicked(element){
  if(element.target.classList.value === "taskClass"){
    element.target.classList.add("done");
  }
}

function handUlClick(element){
  delButtonClick(element);
  itemClicked(element);
}

ul.addEventListener("click", handUlClick);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

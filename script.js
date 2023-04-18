//your code here
let input = document.getElementById("newTodoInput")
let button = document.getElementById("addTodoBtn")
let ol = document.getElementById("todoList")


function emptyStr(){
    input.value = ""
}
input.addEventListener("click", emptyStr)


function addList(){
    let li = document.createElement("li")
    li.innerHTML = input.value
    console.log(li.innerHTML.length)
    if(li.innerHTML.length > 0)
    {
        ol.appendChild(li)
    }
}
button.addEventListener("click", addList)
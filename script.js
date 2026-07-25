function addTask(){

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;

    span.onclick = function(){
        span.classList.toggle("completed");
    };

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.className = "delete-btn";

    del.onclick = function(){
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(del);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
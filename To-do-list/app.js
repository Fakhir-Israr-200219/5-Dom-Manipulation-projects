let inputTask=document.getElementById("input-task")
let AddTask=document.getElementById("add-task")
let TaskContaner=document.getElementById("task-contaner")

// event listener for 

AddTask.addEventListener("click",function(){

    let Task=document.createElement("div");
    Task.classList.add('task');
    let li =document.createElement('li');
    li.innerText=`${inputTask.value}`

    Task.appendChild(li);

    let checkBtn=document.createElement("button");
    checkBtn.innerHTML=`<i class="fa-solid fa-check"></i>`;
    checkBtn.classList.add("checkTask");
    Task.appendChild(checkBtn);

    let deletedbtn =document.createElement("button");
    deletedbtn.innerHTML=`<i class="fa-solid fa-trash-can"></i>`;
    deletedbtn.classList.add("deleteTask");
    Task.appendChild(deletedbtn);

    if (inputTask.value === "") {
        alert("Plase Enter The Task")
    }else{
        TaskContaner.appendChild(Task)
    }

    inputTask.value="";

    checkBtn.addEventListener("click",function(){

        checkBtn.parentElement.style.textDecoration="line-through";

    })
    deletedbtn.addEventListener("click", function(e){
        let target=e.target;

        target.parentElement.parentElement.remove();

    })
})
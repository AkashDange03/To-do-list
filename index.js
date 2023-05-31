let task = document.querySelector("input");
let button = document.querySelector("button");
let tasklistcontainer = document.querySelector(".task_list");
button.addEventListener("click", () => {
    if (task.value === "") {
        alert("please add task...");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = task.value;
        tasklistcontainer.appendChild(li);
        let span=document.createElement("span");   
        span.innerHTML="\u00d7";
        li.appendChild(span); 
        task.value = "";
        savedata()
    }

})

tasklistcontainer.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
});

function savedata(){
    localStorage.setItem("data",tasklistcontainer.innerHTML);
}

function getdata(){
    tasklistcontainer.innerHTML=localStorage.getItem("data");
}

getdata();
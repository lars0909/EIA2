namespace Tasklist{
    function generateList(_tasklist: Tasklist): void{
        for( let i:number = 0; i <= _tasklist.rdmName.length; i++){
            let NewTask: HTMLLIElement = document.createElement("li");
            NewTask.setAttribute("id", "Task_" + i)
            let task = document.createElement("h1");
            task.innerHTML = _tasklist.rdmName[i].task;
            let name: HTMLParagraphElement = document.createElement("p");
            name.innerHTML = "zuständig" + _tasklist.rdmName[i].person;
            let date: HTMLParagraphElement = document.createElement("p");
            date.innerHTML = "bis" + _tasklist.rdmName[i].date;
            let info: HTMLParagraphElement = document.createElement("p");
            info.innerHTML = _tasklist.rdmName[i].info;
            let deleteBtn: HTMLButtonElement = document.createElement("button");
            deleteBtn.innerHTML = "delete";
            deleteBtn.addEventListener(`click`, function(){
                deleteTask();
            })
        
            document.querySelector("#TaskList").appendChild(NewTask);
        
            NewTask.appendChild(task);
            NewTask.appendChild(name);
            NewTask.appendChild(date);
            NewTask.appendChild(info);
            NewTask.appendChild(deleteBtn);
        }
    }
    function deleteTask(){
        console.log("test delete");
    }
}
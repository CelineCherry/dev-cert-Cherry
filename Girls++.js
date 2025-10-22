var taskList = [];

class Task {
    constructor(name, due_date, duration, priority, desc, color){
        // types: string, string DD-MM-YYYY, int, int, string, string in hex format #XXXXXX
    }
}




function onAddTask(){
    //take data and add an object to taskList    
    sortTaskList()
}

function sortTaskList(){
    //sort tasks in list
    saveTaskList()
    showTasks()
}

function saveTaskList(){ // fatemeh

}

function loadTaskList(){

}

function showTasks(){ //fatemeh
    for(task in taskList){
        
    } 
}

loadTaskList();
sortTaskList();
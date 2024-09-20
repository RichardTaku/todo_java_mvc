
/*
let todo1 = 'i love Laeticia';
let todo2 = 'wash car';
let todo3 = 'Make dinner';
*/
/*
let todos = ['get groceries', 'wash car', 'make dinner'];
render();

function addTodo(){
    let textbox = document.getElementById('add-title')
    let title = textbox.value;
    todos.push(title);
    render();

}


function render(){
    //reset the list
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function (todoTitle){

        let element = document.createElement('div');
        element.innerText = todoTitle;
        let todolist = document.getElementById('todo-list')
        todolist.appendChild(element);
        
        });
}
*/

//model
//array of object
let todos;

const saveToDo = JSON.parse(localStorage.getItem('todos'));
if(Array.isArray(saveToDo)){
    todos=saveToDo;

}else{
    todos= [{
        title: 'gret groceries',
        dueDate: '2023-30-08',
        id: 'id1',
    
    },
    {
        title: 'car wash',
        dueDate: '2030-29-08',
        id: 'id2',
    
    },
    {
        title: 'wash',
        dueDate: '2030-29-07',
        id: 'id3',
        
    }]
}



//creates a todo
function createTodo(title, dueDate){ 
//id function: getting current date minus current time
//to convert a number into a string is to an empty string '' +
const  id = '' + new Date().getTime();


todos.push({
    title: title,
    dueDate: dueDate,
    id: id
});
saveToStorage()
}


//delets a to do
function removeTodo(idTodelete){
    todos =  todos.filter(function (todo){
        //if id matches id of delte we remove
        //for everything return true
        if(todo.id === idTodelete){
            return false;
        }else{
            return true;
        }
        
    });
    saveToStorage()
}
function saveToStorage(){
    localStorage.setItem('todos', JSON.stringify(todos))
}

//end of model

/**make item visible in the screen */
render();


//view section 

function render(){
    //reset the list
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function (todo){
        let element = document.createElement('div');
        //adding date
        element.innerText = todo.title + ' ' + todo.dueDate;

        //create delete button
        const deleteButton =  document.createElement('button');
        deleteButton.innerText = 'delete';
        deleteButton.style = ' margin-left: 15px; background-color: blue; width: 80px; height:28px; color: white; justify-content:center ';
         deleteButton.onclick = deleteTodo;
         deleteButton.id = todo.id;
         element.appendChild(deleteButton)
        //end of button
        let todolist = document.getElementById('todo-list')
        todolist.appendChild(element);
        
        });
}

//end of view section


//controll section

function addTodo(){
    let textbox = document.getElementById('add-title')
    let title = textbox.value;
    ////date picker
const datePicker= document.getElementById('dates');
const dueDate = datePicker.value;
createTodo(title, dueDate);

 render();
}

//call to delete button
function deleteTodo(event){
    //getting a particular id that is click we used event
const deleteButton = event.target;
const idTodelete = deleteButton.id;
removeTodo(idTodelete);
render();
}

//end

/*
addTodo(todo3);
addTodo(todo1);
*/
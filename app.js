const taskInput = document.querySelector('#input');
const inputButton = document.querySelector('#input-button');
const taskList = document.querySelector('#task-list');

//event
inputButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);


function addTask(e) {
    if (taskInput.value === "") {
        alert('campo vuoto.scrivi qualcosa...');
    }

    //creare nuovo li e aggiungere classe
    const li = document.createElement('li');
    li.className = 'task';
    //creare nuovo textnode  e metterlo nel nostro listitems
    li.appendChild(document.createTextNode(taskInput.value))
    //creare link
    const link = document.createElement('a');
    //aggiungere classe a <a>
    link.className = "delete-todo"
    //aggungi X ad <a></a>
    link.innerHTML = '<h3>X</h3>'
    //mettere link in li
    li.appendChild(link);
    //mettere li dentro ul
    taskList.appendChild(li);
    //mi ripulisce il campo input ogni volta che inserisco un todo  
    taskInput.value = ""
    e.preventDefault();
}

//rimuovere  un todo

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-todo')) {
        e.target.parentElement.parentElement.remove();
    }
}
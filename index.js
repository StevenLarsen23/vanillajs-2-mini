function addTodo(event){
    event.preventDefault();
    const item = document.createElement('li');
    const itemValue = document.querySelector('#item').value;
    item.innerText = itemValue;
    item.addEventListener('click', completeTodo);

    const button = document.createElement('button');
    button.innerText = 'x';
    button.addEventListener('click', removeTodo);

    item.append(button)

    const list = document.querySelector('ul');
    list.appendChild(item);
}

document.querySelector('form').addEventListener('submit', addTodo);


function removeTodo(event){
    event.target.parentNode.remove();
}

function completeTodo(event){
    let value = event.target.getAttribute('aria-checked');
    if(value !== 'true'){
        event.target.setAttribute('aria-checked', 'true')
    } else {
        event.target.setAttribute('aria-checked', 'false')
    }
}
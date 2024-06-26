let todoList = [{item: 'Buy Milk', dueDate:'16/06/2024'}, {item: 'Go to College', dueDate:'10/06/2024'}];
displayItem();




function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = '';
  dateElement.value = '';
  displayItem();

}

function displayItem() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';


  for (let i = 0; i < todoList.length; i++) {

    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;
    newHtml += `
      
      <span> ${item}</span>
      <span> ${dueDate}</span>
      <button class="delete-btn" onclick="todoList.splice(${i},1);
      displayItem()">Delete</button>
    
     `;
  }
  containerElement.innerHTML = newHtml;
}


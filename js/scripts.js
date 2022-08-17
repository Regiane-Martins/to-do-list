//função que adiciona tarefa
function addTasks() {
  // titulo da tarefa
  const tasksTitle = document.querySelector("#tasks-title").value;

  if (tasksTitle) {
    //clona o template
    const template = document.querySelector(".template");
    const newTasks = template.cloneNode(true);

    //adiciona o titulo
    newTasks.querySelector(".tasks-title").textContent = tasksTitle;

    //remover classes desnecessárias
    newTasks.classList.remove("template");
    newTasks.classList.remove("hide");

    //adiciona a tarefa
    const list = document.querySelector("#tasks-list");
    list.appendChild(newTasks);

    //adicionar remover tarefa
    const removeBtn = newTasks
      .querySelector(".remove-btn")
      .addEventListener("click", function () {
        removeTask(this);
      });

    //adicionar completar tarefa
    const doneBtn = newTasks
      .querySelector(".done-btn")
      .addEventListener("click", function () {
        completeTask(this);
      });

    //limpar texto
    document.querySelector("#tasks-title").value = "";
  }
}

//função de remover tarefa
function removeTask(tasks) {
  tasks.parentNode.remove(true);
}

//função de completar tarefa
function completeTask(tasks) {
  const tasksToComplete = tasks.parentNode;
  tasksToComplete.classList.toggle("done");
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addEventListener("click", function (e) {
  e.preventDefault();
  addTasks();
});

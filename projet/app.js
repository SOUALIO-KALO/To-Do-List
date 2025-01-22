/* ************ Classe `Task` : ************** */
class Task {
  constructor(id, description, completed = false) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }
  toggleCompletion() {
    this.completed = !this.completed;
  }
}

/* *********** Gestionnaire de tâches : ************* */
let tasks = [];
// ajouter
function addTask(id, description, completed) {
  tasks.push(new Task(id, description, completed));
}

//supprimer
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
}

//afficher les tâches
function displayTasks() {
  console.log(tasks);
}

addTask(1, "Apprendre JavaScript");
addTask(2, "Faire les courses", true); // Tâche déjà complétée
addTask(3, "Lire un livre");

displayTasks();

/* **************** Interaction avec le DOM : **************** */
/* const btnAddTask = document.getElementById("addTaskBtn");
const taskDescription = document.getElementById("taskDescription").value;
const taskList = document.getElementById("items");
 */

// afficher les tâches
const renderTasks = () => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = `${task.description} - ${
      task.completed ? "Complété" : "Non complété"
    }`;
    taskItem.addEventListener("click", () => toggleTaskCompletion(task.id));
    taskList.appendChild(taskItem);
  });
};

// gestionnaire d'événements pour l'ajout de tâches
document.getElementById("addTaskButton").addEventListener("click", () => {
  const taskDescription = document.getElementById("taskDescription");
  if (taskDescription.value) {
    addTask(tasks.length + 1, taskDescription);
    document.getElementById("taskDescription").value = "";
  }
});

// Exemple d'utilisation initiale
addTask(1, "Apprendre JavaScript");
addTask(2, "Faire les courses", true);
addTask(3, "Lire un livre");

renderTasks();

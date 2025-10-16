const btnAgregar = document.querySelector(".btnAgregar");
const nuevaTarea = document.querySelector(".nuevaTarea");
const tareas = document.querySelector(".tareas");



btnAgregar.addEventListener("click", () => {
  const texto = nuevaTarea.value.trim();
  if (texto !== "") {
    const id = Date.now().toString();
    localStorage.setItem(id, texto);
    agregarTarea(texto, id);
    nuevaTarea.value = "";
  }
});

//cada que se agregue una tarea se creara un elemento li, un input de checkbox con su respectivo label
function agregarTarea(texto, id) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = id;

  const label = document.createElement("label");
  label.htmlFor = id;
  label.textContent = texto;

  li.appendChild(checkbox);
  li.appendChild(label);
  tareas.appendChild(li);
}



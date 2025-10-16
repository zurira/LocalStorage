const btnAgregar = document.querySelector(".btnAgregar");
const nuevaTarea = document.querySelector(".nuevaTarea");
const tareas = document.querySelector(".tareas");

for (let i = 0; i < localStorage.length; i++) {
  const clave = localStorage.key(i);
  const texto = localStorage.getItem(clave);
  agregarTarea(texto, clave);
}

btnAgregar.addEventListener("click", () => {
  const texto = nuevaTarea.value.trim();
  let contador = 0;
  if (texto !== "") {
    contador ++;
    const id = "tarea"+contador; //se crea una clave única
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

  const label = document.createElement("label");
  label.textContent = texto;

  li.appendChild(checkbox);
  li.appendChild(label);
  tareas.appendChild(li);
}

//terminado


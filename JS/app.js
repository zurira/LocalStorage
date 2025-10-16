const btnAgregar = document.querySelector(".btnAgregar");
const nuevaTarea = document.querySelector(".nuevaTarea");
const listaTareas = document.querySelector(".tareas");

// Mostrar tareas guardadas al cargar
for (let i = 0; i < localStorage.length; i++) {
  const clave = localStorage.key(i);
  const texto = localStorage.getItem(clave);
  agregarTarea(texto, clave);
}

// Al hacer clic en "Agregar"
btnAgregar.addEventListener("click", () => {
  const texto = nuevaTarea.value.trim();
  if (texto !== "") {
    const id = Date.now().toString(); // clave única
    localStorage.setItem(id, texto);
    agregarTarea(texto, id);
    nuevaTarea.value = "";
  }
});

// Función para agregar tarea con checkbox
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
  listaTareas.appendChild(li);
}
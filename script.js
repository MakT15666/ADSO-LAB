// Base de datos de ejercicios precargados para ADSO LAB
const exercises = [
  {
    id: "html-profile",
    title: "1. Tarjeta de Perfil Básica",
    category: "html",
    level: "Básico",
    description: "Agrega una imagen debajo del título usando la etiqueta <img> con la URL indicada, y una lista desordenada <ul> con 2 habilidades.",
    hint: 'Usa <img src="https://picsum.photos/120" alt="Avatar"> y luego <ul><li>HTML</li><li>CSS</li></ul>',
    defaultCode: `<!-- RETO: Agrega la foto del perfil y la lista de habilidades -->
<div style="font-family: sans-serif; text-align: center; padding: 20px; border: 1px solid #ccc; border-radius: 8px;">
  <h2>Aprendiz ADSO</h2>
  <p>En formación técnica en desarrollo de software</p>
  
  <!-- Escribe tu código aquí debajo -->
  
</div>`
  },
  {
    id: "html-form",
    title: "2. Formulario de Inicio de Sesión",
    category: "html",
    level: "Básico",
    description: "Crea un campo para contraseña (<input type=\"password\">) y un botón de envío (<button type=\"submit\">) dentro del formulario.",
    hint: 'Usa <input type="password" placeholder="Tu clave"> y un botón <button type="submit">Entrar</button>',
    defaultCode: `<!-- RETO: Completa el formulario con la contraseña y el botón -->
<form style="font-family: sans-serif; max-width: 280px; margin: 20px auto; display: flex; flex-direction: column; gap: 10px;">
  <h3>Iniciar Sesión</h3>
  <label>Correo Electrónico:</label>
  <input type="email" placeholder="correo@misena.edu.co" style="padding: 8px;">

  <!-- Agrega el campo de contraseña y el botón abajo -->

</form>`
  },
  {
    id: "css-button",
    title: "3. Cambiar Botón de Tarjeta",
    category: "css",
    level: "Básico",
    description: "Haz que el botón sea de color verde (#39a900), su texto sea blanco, y que el contenido de la tarjeta quede centrado.",
    hint: "Usa la propiedad background-color: #39a900, color: white y text-align: center en la tarjeta.",
    defaultCode: `<style>
  .card {
    font-family: sans-serif;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 24px;
    max-width: 300px;
    margin: 20px auto;
    /* 1. Centra todo el texto aquí: */

  }
  .btn {
    border: none;
    padding: 10px 18px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    /* 2. Modifica el color de fondo y el color del texto aquí: */
    background-color: #94a3b8;
    color: #000000;
  }
</style>

<div class="card">
  <h3>Oferta Especial ADSO</h3>
  <p>Aprende frontend práctico sin rodeos.</p>
  <br>
  <button class="btn">Inscribirme ahora</button>
</div>`
  },
  {
    id: "css-flexbox",
    title: "4. Centrado Perfecto con Flexbox",
    category: "css",
    level: "Intermedio",
    description: "Usa Flexbox en la clase .contenedor para centrar horizontal y verticalmente la caja verde dentro del área gris.",
    hint: "Agrega en .contenedor: display: flex; justify-content: center; align-items: center;",
    defaultCode: `<style>
  .contenedor {
    height: 300px;
    background-color: #e2e8f0;
    border-radius: 8px;
    /* RETO: Centra la caja interna en ambos ejes con Flexbox */

  }
  .caja-verde {
    width: 120px;
    height: 120px;
    background-color: #39a900;
    color: white;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-weight: bold;
  }
</style>

<div class="contenedor">
  <div class="caja-verde">¡Centrado!</div>
</div>`
  },
  {
    id: "css-remove-bug",
    title: "5. Quitar Cuadro que Tapa el Texto",
    category: "css",
    level: "Básico",
    description: "Hay un bloque rojo molesto (.bloque-error) tapando el título de bienvenida. Elimínalo o haz que no se muestre con CSS.",
    hint: "Puedes borrar el elemento en el HTML o aplicarle display: none; en su CSS.",
    defaultCode: `<style>
  .banner {
    position: relative;
    padding: 30px;
    background-color: #0284c7;
    color: white;
    font-family: sans-serif;
    border-radius: 8px;
    text-align: center;
  }
  .bloque-error {
    background-color: #ef4444;
    color: white;
    padding: 15px;
    font-weight: bold;
    border-radius: 4px;
    /* RETO: Haz que este bloque no aparezca */

  }
</style>

<div class="banner">
  <h2>¡Bienvenidos al Laboratorio ADSO!</h2>
  <div class="bloque-error">⚠️ ERROR: Este cuadro tapa el contenido</div>
  <p>Aprender maquetación web se logra practicando paso a paso.</p>
</div>`
  },
  {
    id: "both-card",
    title: "6. Tarjeta de Producto Completa",
    category: "both",
    level: "Intermedio",
    description: "Crea una tarjeta de producto moderna con imagen, título, precio destacado en verde y un botón de compra que cambie de color al pasar el cursor (:hover).",
    hint: "Usa .btn-comprar:hover { background-color: #059669; } para el efecto al pasar el mouse.",
    defaultCode: `<style>
  .card-producto {
    font-family: sans-serif;
    width: 260px;
    margin: 20px auto;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    overflow: hidden;
    background: #fff;
    text-align: center;
  }
  .card-producto img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .contenido {
    padding: 16px;
  }
  .precio {
    font-size: 20px;
    color: #10b981;
    font-weight: bold;
    margin: 10px 0;
  }
  .btn-comprar {
    background-color: #2563eb;
    color: #fff;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s;
  }
  /* RETO: Agrega el efecto :hover al botón */

</style>

<div class="card-producto">
  <img src="https://picsum.photos/seed/tech/300/200" alt="Audífonos">
  <div class="contenido">
    <h3>Audífonos Pro ADSO</h3>
    <p class="precio">$85.000 COP</p>
    <button class="btn-comprar">Comprar Ahora</button>
  </div>
</div>`
  },
  {
    id: "both-navbar",
    title: "7. Menú de Navegación Horizontal",
    category: "both",
    level: "Intermedio",
    description: "Convierte la lista vertical de enlaces en una barra de navegación horizontal alineada a los extremos con display: flex.",
    hint: "En el <ul> aplica display: flex; justify-content: space-between; list-style: none; padding: 0;",
    defaultCode: `<style>
  .nav-bar {
    background-color: #0f172a;
    padding: 12px 20px;
    border-radius: 8px;
    font-family: sans-serif;
  }
  .menu {
    /* RETO: Haz que los elementos se alineen horizontalmente */
    margin: 0;
  }
  .menu li a {
    color: #38bdf8;
    text-decoration: none;
    font-weight: 600;
  }
</style>

<nav class="nav-bar">
  <ul class="menu">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Proyectos</a></li>
    <li><a href="#">Aprendices</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>`
  }
];

// Elementos del DOM
const exerciseSelect = document.getElementById("exercise-select");
const filterButtons = document.querySelectorAll(".filter-btn");
const codeEditor = document.getElementById("code-editor");
const livePreview = document.getElementById("live-preview");
const challengeTitle = document.getElementById("challenge-title");
const challengeCategory = document.getElementById("challenge-category");
const challengeLevel = document.getElementById("challenge-level");
const challengeDescription = document.getElementById("challenge-description");
const challengeHint = document.getElementById("challenge-hint");
const resetBtn = document.getElementById("reset-btn");
const copyBtn = document.getElementById("copy-btn");
const viewportButtons = document.querySelectorAll(".view-btn");
const previewStage = document.getElementById("preview-stage");

let currentExercise = exercises[0];

// Poblar el menú desplegable según el filtro seleccionado
function populateSelect(filter = "all") {
  exerciseSelect.innerHTML = "";
  const filtered = exercises.filter(ex => filter === "all" || ex.category === filter);

  filtered.forEach(ex => {
    const option = document.createElement("option");
    option.value = ex.id;
    option.textContent = ex.title;
    exerciseSelect.appendChild(option);
  });

  if (filtered.length > 0) {
    loadExercise(filtered[0].id);
  }
}

// Cargar un ejercicio en el panel y en el editor
function loadExercise(id) {
  const found = exercises.find(ex => ex.id === id);
  if (!found) return;

  currentExercise = found;
  exerciseSelect.value = found.id;

  challengeTitle.textContent = found.title;
  challengeCategory.textContent = found.category === "both" ? "HTML + CSS" : found.category.toUpperCase();
  challengeLevel.textContent = `Nivel: ${found.level}`;
  challengeDescription.textContent = found.description;
  challengeHint.textContent = found.hint;

  codeEditor.value = found.defaultCode;
  updatePreview();
}

// Renderizar el código en el iframe en tiempo real
function updatePreview() {
  const userCode = codeEditor.value;
  const doc = livePreview.contentDocument || livePreview.contentWindow.document;
  doc.open();
  doc.write(userCode);
  doc.close();
}

// Filtros de categoría
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    populateSelect(btn.getAttribute("data-category"));
  });
});

// Cambio manual en el selector de retos
exerciseSelect.addEventListener("change", (e) => {
  loadExercise(e.target.value);
});

// Evento de escritura en el editor
codeEditor.addEventListener("input", updatePreview);

// Soporte para la tecla 'Tab' en el textarea
codeEditor.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    const start = codeEditor.selectionStart;
    const end = codeEditor.selectionEnd;
    codeEditor.value = codeEditor.value.substring(0, start) + "  " + codeEditor.value.substring(end);
    codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
    updatePreview();
  }
});

// Botón de restablecer
resetBtn.addEventListener("click", () => {
  if (confirm("¿Deseas reiniciar el ejercicio a su estado original?")) {
    codeEditor.value = currentExercise.defaultCode;
    updatePreview();
  }
});

// Botón de copiar código
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(codeEditor.value).then(() => {
    const originalText = copyBtn.textContent;
    copyBtn.textContent = "¡Copiado!";
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 1500);
  });
});

// Alternar vista de escritorio y móvil
viewportButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    viewportButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const view = btn.getAttribute("data-view");
    if (view === "mobile") {
      previewStage.classList.add("mobile-view");
    } else {
      previewStage.classList.remove("mobile-view");
    }
  });
});

// Inicialización de la aplicación
populateSelect("all");
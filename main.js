// Variable global para almacenar el número ingresado por el usuario
let number = 0;

// Array para almacenar los resultados de la tabla de multiplicar
let resultados = [];

// Capturamos el formulario y evitamos que se envíe por defecto
const numeroForm = document.getElementById("numero-form");
numeroForm.addEventListener("submit", function(event) {
  event.preventDefault();
  pedirNumero();
});

// Capturamos el botón de "Generar Tabla"
const btnGenerarTabla = document.getElementById("btn-generar-tabla");
btnGenerarTabla.addEventListener("click", generarTabla);

// Capturamos el botón de "Mostrar Resultados"
const btnMostrarResultados = document.getElementById("btn-mostrar-resultados");
btnMostrarResultados.addEventListener("click", mostrarResultados);

// Función para capturar entrada mediante formulario
function pedirNumero() {
  let userInput = document.getElementById("numero-input").value;

  if (userInput.trim() === "" || isNaN(userInput) || parseInt(userInput) <= 0) {
    alert("Por favor, ingresa un número válido mayor a cero.");
  } else {
    number = parseInt(userInput);
    console.log("Número ingresado: " + number);
  }
}

// Función para generar la tabla de multiplicar y agregarla al array "resultados"
function generarTabla() {
  if (number > 0) {
    let tabla = document.getElementById("tabla");
    let html = "<table>";

    let tablaResultado = [];
    for (let i = 1; i <= 20; i++) {
      tablaResultado.push(number * i);
      html += "<tr><td>" + number + "</td><td>*</td><td>" + i + "</td><td>=</td><td>" + tablaResultado[i - 1] + "</td></tr>";
    }
    html += "</table>";

    tabla.innerHTML = html;

    resultados.push(tablaResultado);

    // Almacenar resultados en localStorage
    localStorage.setItem("resultados", JSON.stringify(resultados));

    console.log("Tabla generada y almacenada en el array resultados");
  } else {
    alert("Por favor, ingresa un número válido mayor a cero antes de generar la tabla.");
  }
}

// Función para mostrar los resultados almacenados en el div "resultados"
function mostrarResultados() {
  let resultadosDiv = document.getElementById("resultados");

  // Recuperar resultados desde localStorage
  const storedResultados = JSON.parse(localStorage.getItem("resultados"));

  if (storedResultados === null || storedResultados.length === 0) {
    resultadosDiv.innerHTML = "<p>No hay resultados almacenados en el array.</p>";
  } else {
    let html = "<p>Resultados almacenados en el array:</p><ul>";

    const resultadosFiltrados = storedResultados.map(resultado => resultado.filter(valor => valor >= 50));

    const resultadosValidos = resultadosFiltrados.filter(resultado => resultado.length > 0);

    if (resultadosValidos.length === 0) {
      html += "<li>No hay resultados mayores o iguales a 50 en el array.</li>";
    } else {
      for (let i = 0; i < resultadosValidos.length; i++) {
        html += "<li>Tabla " + (i + 1) + ": " + resultadosValidos[i].join(", ") + "</li>";
      }
    }

    html += "</ul>";
    resultadosDiv.innerHTML = html;
  }
}

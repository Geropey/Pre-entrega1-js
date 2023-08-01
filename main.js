// Variable global para almacenar el número ingresado por el usuario
let number = 0;

// Array para almacenar los resultados de la tabla de multiplicar
let resultados = [];

// Función para capturar entrada mediante prompt()
function pedirNumero() {
  let userInput = prompt("Ingresa un número mayor a cero:");

  // Verificamos si el usuario ingresó un número válido
  if (userInput === null || userInput.trim() === "" || isNaN(userInput) || parseInt(userInput) <= 0) {
    alert("Por favor, ingresa un número válido mayor a cero.");
  } else {
    // Convertimos el valor ingresado a un número entero y lo almacenamos en la variable "number"
    number = parseInt(userInput);
    console.log("Número ingresado: " + number);
  }
}

// Función para generar la tabla de multiplicar y agregarla al array "resultados"
function generarTabla() {
  // Validamos que se haya ingresado un número mayor a cero
  if (number > 0) {
    let tabla = document.getElementById("tabla");
    let html = "<table>";

    // Generamos la tabla de multiplicar y la agregamos al array "resultados"
    let tablaResultado = [];
    for (let i = 1; i <= 20; i++) {
      tablaResultado.push(number * i);
      html += "<tr><td>" + number + "</td><td>*</td><td>" + i + "</td><td>=</td><td>" + tablaResultado[i - 1] + "</td></tr>";
    }
    html += "</table>";

    tabla.innerHTML = html; // Mostramos la tabla generada en el elemento con id "tabla"

    resultados.push(tablaResultado); // Agregamos la tabla de resultados al array "resultados"

    console.log("Tabla generada y almacenada en el array resultados"); // Mostramos un mensaje en la consola como notificación de resultados
  } else {
    alert("Por favor, ingresa un número válido mayor a cero antes de generar la tabla.");
  }
}

// Función adicional para mostrar los resultados almacenados en el array mediante alert()
function mostrarResultados() {
  if (resultados.length === 0) {
    alert("No hay resultados almacenados en el array.");
  } else {
    let mensaje = "Resultados almacenados en el array:\n";
    
    // Filtrar solo los resultados mayores o iguales a 50
    const resultadosFiltrados = resultados.filter(resultado => resultado.every(valor => valor >= 50));

    if (resultadosFiltrados.length === 0) {
      mensaje += "No hay resultados mayores o iguales a 50 en el array.";
    } else {
      for (let i = 0; i < resultadosFiltrados.length; i++) {
        mensaje += "Tabla " + (i + 1) + ": " + resultadosFiltrados[i].join(", ") + "\n";
      }
    }

    alert(mensaje);
  }
}

$(document).ready(function() {
  // Variable global para almacenar el número ingresado por el usuario
  let number = 0;

  // Array para almacenar los resultados de las operaciones
  let resultados = [];

  // Objeto JSON con datos estáticos
  const datosEstaticos = {
    operaciones: [
      {
        nombre: "Multiplicación",
        descripcion: "Realiza operaciones de multiplicación",
      },
      {
        nombre: "División",
        descripcion: "Realiza operaciones de división",
      },
    ],
    numeros: [1, 2, 3, 4, 5],
  };

  // Función para cargar datos estáticos desde el objeto JSON
  function cargarDatosEstaticos() {
    console.log('Datos cargados exitosamente:', datosEstaticos);

  
  }

  // Capturamos el formulario y evitamos que se envíe por defecto
  $("#numero-form").submit(function(event) {
    event.preventDefault();
    pedirNumero();
  });

  // Capturamos los botones de "Generar Multiplicación" y "Generar División"
  $("#btn-generar-multiplicacion").click(function() {
    generarOperacion("multiplicación");
  });

  $("#btn-generar-division").click(function() {
    generarOperacion("división");
  });

  // Capturamos el botón de "Mostrar Resultados"
  $("#btn-mostrar-resultados").click(function() {
    mostrarResultados();
  });

  // Capturamos el botón para cargar datos estáticos
  $("#btn-cargar-datos").click(function() {
    cargarDatosEstaticos();
  });

  // Función para capturar entrada mediante formulario
  function pedirNumero() {
    let userInput = $("#numero-input").val();

    if (userInput.trim() === "" || isNaN(userInput) || parseInt(userInput) <= 0) {
      alert("Por favor, ingresa un número válido mayor a cero.");
    } else {
      number = parseInt(userInput);
      console.log("Número ingresado: " + number);
    }
  }

  // Función para generar la operación (multiplicación o división) y agregarla al array "resultados"
  function generarOperacion(operacion) {
    if (number > 0) {
      let tabla = $("#tabla");
      let html = "<table>";

      let tablaResultado = [];
      for (let i = 1; i <= 20; i++) {
        if (operacion === "multiplicación") {
          tablaResultado.push(number * i);
          html += "<tr><td>" + number + "</td><td>*</td><td>" + i + "</td><td>=</td><td>" + tablaResultado[i - 1] + "</td></tr>";
        } else if (operacion === "división") {
          tablaResultado.push((number / i).toFixed(2));
          html += "<tr><td>" + number + "</td><td>/</td><td>" + i + "</td><td>=</td><td>" + tablaResultado[i - 1] + "</td></tr>";
        }
      }
      html += "</table>";

      tabla.html(html);

      resultados.push(tablaResultado);

      localStorage.setItem("resultados", JSON.stringify(resultados));

      console.log("Operación generada y almacenada en el array resultados");
    } else {
      alert("Por favor, ingresa un número válido mayor a cero antes de generar la operación.");
    }
  }

  // Función para mostrar los resultados almacenados en el div "resultados"
  function mostrarResultados() {
    let resultadosDiv = $("#resultados");

    const storedResultados = JSON.parse(localStorage.getItem("resultados"));

    if (storedResultados === null || storedResultados.length === 0) {
      resultadosDiv.html("<p>No hay resultados almacenados en el array.</p>");
    } else {
      let html = "<p>Resultados mayores a 50:</p><ul>";

      const resultadosFiltrados = storedResultados.map(resultado => resultado.filter(valor => valor >= 50));

      const resultadosValidos = resultadosFiltrados.filter(resultado => resultado.length > 0);

      if (resultadosValidos.length === 0) {
        html += "<li>No hay resultados mayores o iguales a 50 en el array.</li>";
      } else {
        for (let i = 0; i < resultadosValidos.length; i++) {
          html += "<li>Operación " + (i + 1) + ": " + resultadosValidos[i].join(", ") + "</li>";
        }
      }

      html += "</ul>";
      resultadosDiv.html(html);
    }
  }
});

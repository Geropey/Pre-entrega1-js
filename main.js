function generarTabla() {
    let inputNumber = document.getElementById("input-number");
    let tabla = document.getElementById("tabla");
    
    let number = parseInt(inputNumber.value);
    
    let html = "<table>";
    for (let i = 1; i <= 20; i++) {
      html += "<tr><td>" + number + "</td><td>*</td><td>" + i + "</td><td>=</td><td>" + (number * i) + "</td></tr>";
    }
    html += "</table>";
    
    tabla.innerHTML = html;
  
    console.log("Tabla generada");
    }
  
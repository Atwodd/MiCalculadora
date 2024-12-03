let num1 = 0;
let num2 = 0;
let operacion = "";

function realizarOperacion(num1, num2, operacion) {
  if (operacion === "suma") {
    return num1 + num2;
  } else if (operacion === "resta") {
    return num1 - num2;
  } else if (operacion === "multiplicacion") {
    return num1 * num2;
  } else if (operacion === "division") {
    if (num2 === 0) {
      return "Error: División por cero no permitida.";
    }
    return num1 / num2;
  } else {
    return "Error: Operación no válida.";
  }
}


function iniciarCalculadora() {
  let continuar = true;

  while (continuar) {
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    operacion = prompt(
      "Ingrese la operación a realizar (suma, resta, multiplicacion, division):"
    );

    const resultado = realizarOperacion(num1, num2, operacion);
    alert(`Resultado: ${resultado}`);

    const respuesta = prompt("¿Desea realizar otra operación? (sí/no):");
    if (respuesta.toLowerCase() !== "sí") {
      continuar = false;
    }
  }

  alert("Gracias por usar la calculadora. ¡Adiós!");
}

document.getElementById("iniciar").addEventListener("click", iniciarCalculadora);

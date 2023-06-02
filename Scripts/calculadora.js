let expresion = '';
let pantalla = document.getElementById('pantalla');

function ingresarNumero(numero) {
  expresion += numero;
  pantalla.innerHTML += numero;
}

function calcular(oper) {
  if (oper === 'sqrt') {
    expresion += 'Math.sqrt(';
    pantalla.innerHTML += '√(';
  } else if (oper === '^') {
    expresion += '**';
    pantalla.innerHTML += '^';
  } else {
    expresion += oper;
    pantalla.innerHTML += oper;
  }
}

function calcularResultado() {
  let resultado;
  try {
    if (expresion.includes('Math.sqrt(')) {
      expresion += ')';
    }
    resultado = eval(expresion);
    pantalla.innerHTML = resultado;
    expresion = resultado.toString();
  } catch (error) {
    console.log('Error en la expresión');
    pantalla.innerHTML = 'Error';
    expresion = '';
  }
}

function borrar() {
  pantalla.innerHTML = '';
  expresion = '';
}

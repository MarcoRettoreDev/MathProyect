// Variables

let ingresoTotal = [0];
let gasto = [0];
// let gastoVariable = [0];


// Funciones para agregar valores
function nuevoIngreso (monto)
{
  ingresoTotal.push(monto);
  const container = document.getElementById('income-field-id'); // Div container
  const div = document.createElement('div') // creamos un nuevo elemento div
  const img = document.createElement('img') // creamos elemento img

  // div
  div.setAttribute('class', 'income-line'); // añadimos los atributos DIV
  div.setAttribute('id', 'income-line')
  container.append(div); // pegamos el DIV como primer hijo del container
  // p
  const p = document.createElement('p') // creamos un nuevo elemento p
  p.textContent = monto; // añadimos el texto al elemento p
  // img
  img.setAttribute('type', 'image'); // atributos img
  img.setAttribute('class', 'btn-close'); 
  img.setAttribute('src', './icons/icon_close.png');
  img.setAttribute('onclick', 'test()');
  
  div.appendChild(p); // agregamos el hijo a nuestra lista
  div.appendChild(img);
};

function nuevoGasto (monto) 
{
  gasto.push(monto);
  const container = document.getElementById('expense-field-id'); 
  const div = document.createElement('div') 
  const img = document.createElement('img') 


  div.setAttribute('class', 'income-line');
  div.setAttribute('id', 'income-line')
  container.append(div); 

  const p = document.createElement('p') 
  p.textContent = monto; 

  img.setAttribute('type', 'image'); 
  img.setAttribute('class', 'btn-close'); 
  img.setAttribute('src', './icons/icon_close.png');
  img.setAttribute('onclick', 'test()');
  
  div.appendChild(p); 
  div.appendChild(img);
};

// function nuevoGastoVariable(monto)                           PROXIMAMENTE
// {
//   parseInt(monto);
//   gastoVariable.push(monto);
// };



// Funciones para sumar
const suma = (a ,b) => a + b;

function sumarGastos()
{
  let resultado = gasto.reduce((a ,b)=> a + b);
  return resultado;
};

function sumarIngresos()
{
  const ingresos = ingresoTotal.reduce((a ,b) => a + b);
  return ingresos;
};



// Funciones para restar

function borrarIngreso()
{
  ingresoTotal.pop()
};

function borrarGasto()
{
  gastoFijo.pop();
};

// function borrarGastoVariable()                           PROXIMAMENTE
// {
//   gastoVariable.pop();
// };

// Funcion balance

function balance()
{
  const gastos = sumarGastos();
  const ingresos = sumarIngresos();
  return ingresos - gastos;
};

// Porcentaje
 
const calcularPorcentaje = (ingresos, gastos) =>
{
  const calc = (100*gastos)/ingresos;
  return calc; // retorna el porcentaje en numero entero. (agregar '%' )
};


// HTML INPUTS

var modal = document.getElementById("modal-calculator"); // MODAL
var btnAddIncome = document.getElementById("button-add-income"); // ADD INCOME
var btnAddExpense = document.getElementById("button-add-expense");// ADD EXPENSE
var btnSend = document.getAnimations("modal-send");
var span = document.getElementsByClassName("modal-close")[0]; // span to close the modal
var input = Number(document.getElementById("input-calculator-field").value); // input

// HTML ACTIONS

btnAddIncome.onclick = () =>  nuevoIngreso (input);
btnAddExpense.onclick = () => nuevoGasto (input); 
span.onclick = () => modal.style.display = "none";


const test = () => alert("FALTA PODER QUITAR ELEMENTOS CON EVENTO");
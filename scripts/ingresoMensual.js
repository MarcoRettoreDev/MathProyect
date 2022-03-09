// Variables

let ingresoTotal = [0]; // Lista ingreso
let gasto = [0];        // List Gasto

// Funciones para agregar items
function nuevoIngreso (monto)
{
  if (monto !== 0 & monto === Number)
  {
    ingresoTotal.push(monto);
    const container = document.getElementById('income-field-id'); // Div container
    const div = document.createElement('div') // creamos un nuevo elemento div
    const img = document.createElement('img') // creamos elemento img

    // div
    div.setAttribute('class', 'income-line line'); // añadimos los atributos DIV
    div.setAttribute('id', 'income-line')
    container.append(div); // pegamos el DIV como primer hijo del container
    // p
    const p = document.createElement('p') // creamos un nuevo elemento p
    p.textContent = monto; // añadimos el texto al elemento p
    p.setAttribute('id', 'income-value') // añadimos el id para poder borrar el elemento

    // img
    img.setAttribute('type', 'image'); // atributos img
    img.setAttribute('class', 'btn-close'); 
    img.setAttribute('src', '/icons/icon_close.png');
    img.setAttribute('onclick', 'deleteIngreso(this)');
    
    div.appendChild(p); // agregamos el hijo a nuestra lista
    div.appendChild(img);

    clearInput(); // Borramos el contenido del input
  }
  else
  {
    return null
  };
};

function nuevoGasto (monto) 
{
  if (monto !== 0 & monto === Number)
  {
    gasto.push(monto);
    const container = document.getElementById('expense-field-id'); 
    const div = document.createElement('div') 
    const img = document.createElement('img') 
  
    div.setAttribute('class', 'expense-line line');
    div.setAttribute('id', 'expense-line')
    container.append(div); 
  
    const p = document.createElement('p') 
    p.textContent = monto;
  
    img.setAttribute('type', 'image'); 
    img.setAttribute('class', 'btn-close'); 
    img.setAttribute('src', '/icons/icon_close.png');
    img.setAttribute('onclick', 'deleteGasto(this)');
    
    div.appendChild(p); 
    div.appendChild(img);
  
    clearInput(); 
  }
  else
  {
    return null
  };
};

// Funcion borrar item
const deleteIngreso = (el) =>
{
  var element = el; // traemos el elemento al scope
  element.parentNode.remove(el); // removemos el nodo padre
  const value = Number(el.previousElementSibling.innerText); // Guardamos el valor en constante para enviarle como parámetro 
  borrarIngreso(value); // se borra de la lista
  sumarIngresos(); // se suman todos los valores nuevamente
  balance(); // se hace el balance de la lista
}

const deleteGasto = (el) =>
{
  var element = el;
  element.parentNode.remove(el);
  const value = Number(el.previousElementSibling.innerText);
  borrarGasto(value);
  sumarGastos();
  balance();
}

// Funcion leer input event
function input ()
{
  const input = Number(document.getElementById("input-calculator-field").value);
  return input;
}

// Funciones para sumar
const suma = (a ,b) => a + b;

function sumarIngresos() // suma todos los ingresos de la lista
{
  let resultado = ingresoTotal.reduce((a ,b)=> a + b);
  const field = document.getElementById('income-total-field')
  field.textContent = `$${(Math.round(resultado * 100) / 100).toFixed(2)}`;
  return resultado;
};

function sumarGastos() // suma todos los gastos de la lista
{
  let resultado = gasto.reduce((a ,b)=> a + b);
  const field = document.getElementById('expense-total-field')
  field.textContent = `$${(Math.round(resultado * 100) / 100).toFixed(2)}`;
  return resultado;
};

// Funciones para restar

function borrarIngreso(value)  // borra la linea especifica de ingreso
{
  const index = ingresoTotal.indexOf(value);
  ingresoTotal.splice(index, 1);
};

function borrarGasto(valor)  // borra la linea especifica de gasto
{ 
  const index = gasto.indexOf(valor);
  return gasto.splice(index, 1);
};

// Funcion balance

function balance()
{
  const gastos = sumarGastos();
  const ingresos = sumarIngresos();
  const field = document.getElementById("balance-total-field");
  const resultado = ingresos - gastos;
  field.innerText = `$${(Math.round(resultado * 100) / 100).toFixed(2)}`;
  return resultado;
};

// Funcion clear input

function clearInput ()
{
  const input = document.getElementById('input-calculator-field');
  return input.value = '';
}

// Funcion clear all

function clearAll ()
{
  const totalIncomes= document.getElementById('income-total-field');
  totalIncomes.innerText = "";
  const totalExpenses = document.getElementById('expense-total-field');totalExpenses.innerText = "";
  const totalBalance = document.getElementById('balance-total-field');
  totalBalance.innerText = "";
  const inputField = document.getElementById('input-calculator-field');
  inputField.innerText = "";

  const lineIncome = document.getElementsByClassName('income-line');
  const lineExpense = document.getElementsByClassName('expense-line');

  for (var i = lineIncome.length -1 ; i >= 0 ; --i) //Bucle reverso para remover todos los hijos del HTML collection
  {
    lineIncome[i].remove();
  }

  for (var i = lineExpense.length -1 ; i >= 0 ; --i)
  {
    lineExpense[i].remove();
  }

  gasto = [0]; // volvemos los valores de las listas a 0
  ingresoTotal = [0];
  clearInput (); // limpia el input
}

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
var btnClearAll = document.getElementById('clear-all'); // clear All
var span = document.getElementsByClassName("menu-wrapper")[0]; // span to close the modal

// HTML ACTIONS

btnAddIncome.onclick = () =>  nuevoIngreso (input());
btnAddExpense.onclick = () => nuevoGasto (input());
btnClearAll.onclick = () => clearAll();

// boton X cerrar menu
span.onclick = () => span.style.display = "none";
//boton menu burger
var btnMenuBurger = document.getElementById('menu-burger');
btnMenuBurger.onclick = () => span.style.display = "block";

// Auto suma gastos, ingresos y balance.

btnAddIncome.addEventListener('click', sumarIngresos);
btnAddExpense.addEventListener('click', sumarGastos);
btnAddExpense.addEventListener('click', balance);
btnAddIncome.addEventListener('click', balance);



// Variables

let ingresoTotal = [0];
let gastoFijo = [0];
let gastoVariable = [0];

// Funciones para agregar valores

function nuevoIngreso (monto)
{
  ingresoTotal.push(monto);
};

function nuevoGastoFijo (monto) 
{
  gastoFijo.push(monto);
};

function nuevoGastoVariable(monto)
{
  gastoVariable.push(monto);
};

// Funciones para sumar

const suma = (a ,b) => a + b;

function sumarGastos() // suma los gastos fijos con los variables
{
  let fijos = gastoFijo.reduce((a ,b) => a + b);
  let variables = gastoVariable.reduce((a ,b) => a + b);
  return fijos + variables;
};

function sumarIngresos()
{
  const ingresos = ingresoTotal.reduce((a ,b) => a + b);
  return ingresos;
};



// Funciones para restar

function borrarIngreso(monto)
{
  ingresoTotal.pop()
};

function borrarGastoFijo(monto)
{
  gastoFijo.pop();
};

function borrarGastoVariable(monto)
{
  gastoVariable.pop();
};

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


nuevoIngreso(1000);
nuevoGastoFijo(200);
nuevoGastoVariable(100);

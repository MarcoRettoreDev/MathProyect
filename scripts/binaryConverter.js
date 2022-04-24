/* Main functions */
var arrayNumber = []; // Array con los numeros ingresados 

const inputlist = () =>
{

  let number = document.getElementById('input-binary').value; /* numero */ 
  arrayNumber.unshift(`${number}`); /* insertamos numero en lista */
  let resetInput = document.getElementById('input-binary').value = ""; /*reseteamos el valor */
  resetInput; /*ejecutamos la funcion */

  const sumaLista = []; // valores a sumar

  arrayNumber.forEach((numb, index)=>
  {
    let calculo = numb * (2 **index); // hacemos el calculo de cada numero por su posición
    sumaLista.push(calculo);
  });

  let decimalTotal = sumaLista.reduce((a ,b)=> 
  {
    const suma = a + b ; // Hacemos un reduce para sumar todos los elementos de la lista y obtener el numero
    return suma
  }, 0);

  let binaryTotal = arrayNumber.reduce((a ,b)=> 
  {
    const suma = b + a ; 
    return suma
  });

  // imprimimos el resultado
  const field = document.getElementById('result-decimal');
  field.innerText = `${decimalTotal}`; 

  const field2 = document.getElementById('result-binary');
  field2.innerText = `${binaryTotal}`;
}

const eventBackspace = (event) =>
{
  let number = document.getElementById('input-decimal');
}

function clearDiscount()
{
  const inputBinary = document.getElementById('input-binary');
  const field = document.getElementById('result-decimal');
  const field2 = document.getElementById('result-binary');
  
  arrayNumber = [];
  field.innerHTML = " ";
  field2.innerText = ``;
  inputBinary.value = '';
}

// HTML inputs (hace que el resultado se actualize solo)

const input1 = document.getElementById('input-binary');
input1.addEventListener('input', inputlist);

// inputBackspace.addEventListener('input', eventBackspace);

const btn = document.getElementById('clear-all');
btn.addEventListener("click" ,clearDiscount);

// boton X cerrar menu
var span = document.getElementsByClassName("menu-wrapper")[0]; // span to close the modal
span.onclick = () => span.style.display = "none";

//boton menu burger
var btnMenuBurger = document.getElementById('menu-burger');
btnMenuBurger.onclick = () => span.style.display = "block";
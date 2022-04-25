/* Main functions */
var arrayNumber = []; // Array con los numeros ingresados 

function inputlist () 
{
  let number = Number(document.getElementById('input-binary').value); /* numero */ 
  if(number === 1 | number === 0) // Comprobamos que el numero sea un binario
  {
    arrayNumber.unshift(`${number}`); /* insertamos numero en lista */
    let resetInput = document.getElementById('input-binary').value = ""; /*reseteamos el valor */
    resetInput; /*ejecutamos la funcion */

    // Creamos un array vacio para ir creando nuestra suma compuesta
    const sumaLista = [];

    // hacemos el calculo de cada numero por su posición
    arrayNumber.forEach((numb, index)=>
    {
      let calculo = numb * (2 **index); 
      sumaLista.push(calculo);
    });

    // Hacemos un reduce para sumar todos los elementos de la lista y obtener el numero
    let decimalTotal = sumaLista.reduce((a ,b)=> 
    {
      const suma = a + b ; 
      return suma
    }, 0);

    let binaryTotal = arrayNumber.reduce((a ,b)=> 
    {
      const suma = b + a ; 
      return suma
    });
    
    // imprimimos el resultado
    const printResult = () =>
    {
      const field = document.getElementById('result-decimal');
      field.innerText = `${decimalTotal}`; 

      const field2 = document.getElementById('result-binary');
      field2.innerText = `${binaryTotal}`;
    }
    return printResult();
  }
  else
  {
    const field2 = document.getElementById('result-binary');
    field2.innerText = `Failed: you have to insert only 1 or 0 numbers;`; 
  }
}

/* Manejador de eventos */
const eventHandler = (event) =>
{
  function clearLastDigit() 
  {
    arrayNumber.pop(0)
  }

  if(event.key == 'Backspace')
  {
    clearLastDigit();
  }
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


const btn = document.getElementById('clear-all');
btn.addEventListener("click" ,clearDiscount);

// boton X cerrar menu
var span = document.getElementsByClassName("menu-wrapper")[0]; // span to close the modal
span.onclick = () => span.style.display = "none";

//boton menu burger
var btnMenuBurger = document.getElementById('menu-burger');
btnMenuBurger.onclick = () => span.style.display = "block";
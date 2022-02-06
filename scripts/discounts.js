
function calcularPrecioConDescuento()
{
  // traemos los elementos y valores al JS
  const inputPrice = document.getElementById('input-price');
  const inputDiscount = document.getElementById('input-discount');

  const priceValue = inputPrice.value;
  const discountValue = inputDiscount.value;

  //calculamos el % a descontar con nuestros argumentos (P y D)
  const procentajePrecioConDescuento = 100 - discountValue;

  //formula para calcular el descuento a nuestro precio descontado
  const precioConDescuento = (priceValue * procentajePrecioConDescuento) / 100;

  // Imprimimos el resultado:
  const field = document.getElementById('result-discount');
  field.innerHTML = `$${precioConDescuento}`;
  // Retornamos el precio ya descontado
  return precioConDescuento;
}

function clearDiscount()
{
  const inputPrice = document.getElementById('input-price');
  const inputDiscount = document.getElementById('input-discount');
  const field = document.getElementById('result-discount');


  field.innerHTML = " ";
  inputPrice.value = '';
  inputDiscount.value = '';
}


// HTML inputs (hace que el resultado se actualize solo)

const input1 = document.getElementById('input-price');
input1.addEventListener('input', calcularPrecioConDescuento);

const input2 = document.getElementById('input-discount');
input2.addEventListener('input', calcularPrecioConDescuento);

const btn = document.getElementById('clear-all');
btn.addEventListener("click" ,clearDiscount);

// boton X cerrar menu
var span = document.getElementsByClassName("menu-wrapper")[0]; // span to close the modal
span.onclick = () => span.style.display = "none";

//boton menu burger
var btnMenuBurger = document.getElementById('menu-burger');
btnMenuBurger.onclick = () => span.style.display = "block";
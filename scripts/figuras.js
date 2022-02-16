// Código del cuadrado

function perimetroCuadrado (lado)
{
  return lado * 4;
};


function areaCuadrado (lado)
{
  return lado * lado;
}


// Código del triángulo
// DATOS: lado1, lado2, base
function perimetroTriangulo (lado1,lado2,base)
{
  return lado1 + lado2 + base;
}

function  areaTriangulo (base, altura)
{
  return (base * altura) / 2;
}

//lado A y lado B son 2 triangulos iguales (la mitad del triangulo isoceles)
function alturaTrianguloIsoceles(trianguloGrandeLadoA,trianguloGrandeLadoB,trianguloGrandeLadoBase) 
{
  if (trianguloGrandeLadoA != trianguloGrandeLadoB)
  {
    const error = "Both sides has to be same size";
    return error;
  }
  else
  {
    // partimos nuestro triangulo en 2 triangulos isoceles
    const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
    const trianguloPequenoLadoBase = trianguloGrandeLadoA;
    
    //variables al cuadrado
    const trianguloPequenoLadoBcuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
    const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;
    
    const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBcuadrado);  // calculamos el lado A del triangulo pequeño


    const trianguloGrandeAltura = trianguloPequenoLadoA;
    return trianguloGrandeAltura; //retornamos la altura
  }
}

// Código del circulos

// RADIO

// Diámetro
function diametroCirculo(radio)
{
  return radio * 2;
}

// Pi
const pi = Math.PI;

// CIRCUNSFERENCE
function perimetroCirculo(radio)
{
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}

// Area
function areaCirculo(radio)
{
  return (radio ** 2) * pi;
}

// HTML SQUARE BUTTONS

function calcularPerimetroCuadrado()
{
  const inputsquare = document.getElementById('input-square'); // button
  const value = inputsquare.value;
  const perimetro = perimetroCuadrado(value);

  const result = document.getElementById('result-square-perimeter'); // result var
  result.innerHTML = (`${perimetro} cm`); // print the result
}

function calcularAreaCuadrado()
{
  const inputsquare = document.getElementById('input-square'); // button
  const value = parseInt(inputsquare.value);
  const area = areaCuadrado(value);


  const result = document.getElementById('result-square-area'); // result var
  result.innerHTML = (`${area} cm²`); // print the result
}

function clearSquareResult ()
{
  const result = document.getElementById('result-square-perimeter');
  const result2 = document.getElementById('result-square-area');
  const inputsquare = document.getElementById('input-square');
  result2.textContent = "";
  result.textContent = "";
  inputsquare.value = "";
}

// HTML TRIANGLE BUTTONS

function calcularPerimetroTriangulo()
{
  const inputside1 = document.getElementById('input-side-1'); // lado
  const inputside2 = document.getElementById('input-side-1');
  const inputbase = document.getElementById('input-base'); // base
  const value1 = parseInt(inputside1.value);
  const value2 = parseInt(inputside2.value);
  const valuebase = parseInt(inputbase.value);
  const result = document.getElementById('result-triangle-perimeter'); // result var
  if (value1 > valuebase)
  {
    const perimetrotriangulo = perimetroTriangulo(value1,value2,valuebase);
    result.innerHTML = (`${perimetrotriangulo} cm`); // print the result
  }
  else
  {
    result.innerHTML = ('Side lower than Base');
  }
}

function calcularAreaTriangulo()
{
  const inputside1 = document.getElementById('input-side-1'); // lado
  const inputside2 = document.getElementById('input-side-1');
  const inputbase = document.getElementById('input-base'); // base
  const value1 = parseInt(inputside1.value);
  const value2 = parseInt(inputside2.value);
  const valuebase = parseInt(inputbase.value);
  const result = document.getElementById('result-triangle-area'); // result var

  if (value1 > valuebase) // comprobamos que el Lado sea mayor que la base
  {
    // calculamos altura triangulo
    const altura = alturaTrianguloIsoceles(value1,value2,valuebase);
    // pasamos la constante como parámetro en nuestra funcion
    const areatriangulo = areaTriangulo(valuebase, altura);
    result.innerHTML = (`${areatriangulo.toFixed(2)} cm²`); // print the result
  }
  else
  {
    result.innerHTML = ('Side lower than Base'); // lower
  }
}

function clearTriangleResult()
{
  const result = document.getElementById('result-triangle-perimeter');
  const result2 = document.getElementById('result-triangle-area');
  const inputside1 = document.getElementById('input-side-1'); 
  const inputbase = document.getElementById('input-base');
  result2.textContent = " ";
  result.textContent = " ";
  inputside1.value = " ";
  inputbase.value = " ";
  inputbase.textContent = '';
}


// HTML CIRCLE BUTTONS

function calcularPerimetroCirculo()
{
  const inputRadio = document.getElementById('input-circle'); // boton 
  const value = parseInt(inputRadio.value);
  const calculoPerimetroCirculo = perimetroCirculo(value);
  
  const result = document.getElementById('result-circle-circumference'); // result var
  result.innerHTML = (`${calculoPerimetroCirculo.toFixed(3)} cm`);
}

function calcularAreaCirculo()
{
  const inputRadio = document.getElementById('input-circle'); // boton 
  const value = parseInt(inputRadio.value); // pasamo a integer the value
  const calculoAreaCirculo = areaCirculo(value);

  const result = document.getElementById('result-circle-area'); // result var
  result.innerHTML = (`${calculoAreaCirculo.toFixed(3)} cm²`);
}

function clearCircleResult()
{
  const result = document.getElementById('result-circle-circumference');
  const result2 = document.getElementById('result-circle-area');
  const inputRadio = document.getElementById('input-circle');  
  result2.innerText = "";
  result.innerHTML = "";
  inputRadio.value = "";
}


// boton X cerrar menu
var span = document.getElementsByClassName("menu-wrapper")[0]; // span to close the modal
span.onclick = () => span.style.display = "none";

//boton menu burger
var btnMenuBurger = document.getElementById('menu-burger');
btnMenuBurger.onclick = () => span.style.display = "block";
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

  const result = document.getElementById('result-square'); // result var
  result.innerHTML = (`${perimetro} cm`); // print the result
}

function calcularAreaCuadrado()
{
  const inputsquare = document.getElementById('input-square'); // button
  const value = parseInt(inputsquare.value);
  const area = areaCuadrado(value);


  const result = document.getElementById('result-square'); // result var
  result.innerHTML = (`${area} cm`); // print the result
}

function clearSquareResult ()
{
  const result = document.getElementById('result-square');
  result.innerHTML = "";
}

// HTML TRIANGLE BUTTONS

function calcularPerimetroTriangulo()
{
  const inputside1 = document.getElementById('input-side-1'); // lado1
  const inputside2 = document.getElementById('input-side-2'); // lado2
  const inputbase = document.getElementById('input-base'); // base
  const value1 = parseInt(inputside1.value);
  const value2 = parseInt(inputside2.value);
  const valuebase = parseInt(inputbase.value);
  const perimetrotriangulo = perimetroTriangulo(value1,value2,valuebase);

  const result = document.getElementById('result-triangle'); // result var
  result.innerHTML = (`${perimetrotriangulo} cm`); // print the result
}

function calcularAreaTriangulo()
{
  const inputside1 = document.getElementById('input-side-1'); // lado1
  const inputside2 = document.getElementById('input-side-2'); // lado2
  const inputbase = document.getElementById('input-base'); // base
  const value1 = parseInt(inputside1.value);
  const value2 = parseInt(inputside2.value);
  const valuebase = parseInt(inputbase.value);

  // console.log(value1, value2, valuebase)
  const altura = alturaTrianguloIsoceles(value1,value2,valuebase);
  const areatriangulo = areaTriangulo(valuebase, altura);

  const result = document.getElementById('result-triangle'); // result var
  result.innerHTML = (`${areatriangulo} CM²`); // print the result
}

function clearTriangleResult()
{
  const result = document.getElementById('result-triangle');
  result.innerHTML = "";
}


// HTML CIRCLE BUTTONS

function calcularPerimetroCirculo()
{
  const inputRadio = document.getElementById('input-circle'); // boton 
  const value = parseInt(inputRadio.value);
  const calculoPerimetroCirculo = perimetroCirculo(value);
  
  const result = document.getElementById('result-circle'); // result var
  result.innerHTML = (`${calculoPerimetroCirculo} cm`);
}

function calcularAreaCirculo()
{
  const inputRadio = document.getElementById('input-circle'); // boton 
  const value = parseInt(inputRadio.value); // pasamo a integer the value
  const calculoAreaCirculo = areaCirculo(value);

  const result = document.getElementById('result-circle'); // result var
  result.innerHTML = (`${calculoAreaCirculo} cm`);
}
function clearCircleResult()
{
  const result = document.getElementById('result-circle');
  result.innerHTML = "";
}


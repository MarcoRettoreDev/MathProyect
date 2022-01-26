// LISTA ACTUAL
let list = []; 

// Lista de salarios ordenada:

const listadoSorted =  list.sort((a ,b)=>(a - b));

// Helpers

function newItemList (salaryInput ,list) 
{
  list.push(Number(salaryInput.value));
  const listAdded = document.getElementById('list-added');
  return listAdded.innerText = list.join(', ');
};

function clearList(list)
{
  list.length = 0;
  const listAdded = document.getElementById('list-added');
  salaryInput.value = 0;
  return listAdded.innerText = "Nothing on your list";
}

function esPar(lista)
{
  const listaNew = lista.sort((a, b)=> a -b); // ordenamos la lista en forma ascendete
  if (listaNew.length % 2 === 0 )
  {
    return true;
  }
  else
  {
    return false;
  }
}

// Cáculo de mediana

function calcularMediana(lista)
{
  const resultMedian = document.getElementById('media-result'); // resultado
  const listaLength = lista.length // guardamos la cantidad de indices
  const listaPar = esPar(lista); // llamamos a la funcion para comprobar
  const listaMitad = Math.floor(listaLength / 2);
  if (lista.length === 0) // si la lista esta vacía, pedimos 3 valores
  {
    return resultMedian.innerHTML = 'List must be at least with 3 values';
  }
  else
  {
    if (listaPar) // Si la lista es par
    {
      const elem1 = lista[listaMitad -1]; // guardamos el valor de la mitad la lista
      const elem2 = lista[listaMitad]; // guardamos el valor siguiente
      const promedio = (elem1 + elem2) / 2; // sacamos el promedio entre los 2 valores
      return resultMedian.innerHTML = `The median of the list is: $${promedio}`; // devolvemos el resultado
    }
    else // si es impar
    {
      const listaMitadLength = Math.floor(listaLength / 2);
      return resultMedian.innerHTML = `The median of the list is: $${lista[listaMitadLength]}`; // devolvemos el indice de la lista.
    }
  }
}

// Cálculo de media

function mediaAritmetica (lista)
{
  const sumaLista = lista.reduce((acc = 0, elem)=>
  {
    return acc + elem;
  });
  const promedioLista = sumaLista / lista.length;

  const resultMean = document.getElementById('mean-result');

  return resultMean.innerHTML = `The mean of the list is: $${(Math.round(promedioLista * 100) / 100).toFixed(2)}`;
}

// Cálculo de moda

function calculateMode(list)
{
  const listObj = {};
  list.map((e)=>
  {
    if(listObj[e])
    {
      listObj[e] += 1;
    }
    else
    {
      listObj[e] = 1;
    }
  });

  const listArray = Object.entries(listObj).sort((eA,eB)=>
  {
    return eA[1] - eB[1];
  });
  const resultMode = document.getElementById('mode-result');
  const moda = listArray[listArray.length - 1];
  return resultMode.innerHTML = `The mode is: $${moda[0]} , it repeats:  ${moda[1]} times inside the list.`;
}


// Mediana general
const medianaGeneralArg = calcularMediana(list);

// Mediana del top 10%

const spliceStart = (listadoSorted.length * 90) / 100; // calculamos el 90% de nuestra lista
const spliceCount = listadoSorted.length - spliceStart; // guardamos el 10% restante

const listadoTop10 = listadoSorted.splice(spliceStart ,spliceCount); // cortamos una nueva lista

const medianaTop10Arg = calcularMediana(listadoTop10); // calculamos la mediana en una nueva lista

// BOTTONES HTML

const mean = document.getElementById('mean-button');
const median = document.getElementById('median-button');
const mode = document.getElementById('mode-button');

const salaryInput = document.getElementById('salary-input');

// MENU BURGER RWD
var btnMenuBurger = document.getElementById('menu-burger');
btnMenuBurger.onclick = () => span.style.display = "block";

// Cerrar menu burger RWD
var span = document.getElementsByClassName("menu-wrapper")[0]; // span to close the modal
span.onclick = () => span.style.display = "none";
// Lista de salarios:
const salariosArg= argentina.map((elem)=>
{
  return elem.salary;
});

const salariosArgSorted =  salariosArg.sort((a ,b)=>(a - b));

// Helpers

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
  const listaLength = lista.length // guardamos la cantidad de indices
  const listaPar = esPar(lista); // llamamos a la funcion para comprobar
  const listaMitad = Math.floor(listaLength / 2);
  if (listaPar) // Si la lista es par
  {
    const elem1 = lista[listaMitad -1]; // guardamos el valor de la mitad la lista
    const elem2 = lista[listaMitad]; // guardamos el valor siguiente
    const promedio = mediaAritmetica([elem1,elem2]); // sacamos el promedio entre los 2 valores
    console.log(promedio); // devolvemos el resultado el resultado
  }
  else // si es impar
  {
    const listaMitadLength = Math.floor(listaLength / 2);
    return lista[listaMitadLength]; // devolvemos el indice de la lista.
  }
}

function mediaAritmetica (lista)
{
  const sumaLista = lista.reduce((acc = 0, elem)=>
    {
      return acc + elem;
    });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}


// Mediana general
const medianaGeneralArg = calcularMediana(salariosArg);

// Mediana del top 10%

const spliceStart = (salariosArgSorted.length * 90) / 100; // calculamos el 90% de nuestra lista
const spliceCount = salariosArgSorted.length - spliceStart; // guardamos el 10% restante

const salariosArgTop10 = salariosArgSorted.splice(spliceStart ,spliceCount); // cortamos una nueva lista

const medianaTop10Arg = calcularMediana(salariosArgTop10); // calculamos la mediana en una nueva lista

// PROMEDIO (MEDIA ARITMETICA)

function mediaAritmetica (lista)
{
  const sumaLista = lista.reduce
  (
    function (acc = 0, elem)
    {
      return acc + elem;
    }
  );
  
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// MEDIANA

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

const lista = 
[
  1,
  2,
  3,
  3,
  3,
  8,
  72,
  32,
  3,
  10,
  11,
  11,
  21,
  5,
  5,
  6,
  17,
  16
];

const lista1Count = {};

// MODA EDITING
calcularModa(lista)
function calcularModa(lista)
{
  lista.map((elemento)=>
  {
    const nueva = lista[elemento];
    // console.log(nueva);
    console.log([elemento])
    if (lista1Count[elemento])
    {
      lista1Count[elemento] =+ 1;
      console.log(lista1Count)
    }
    else
    {
      lista1Count[elemento] = 1;
    }
  });




  // console.log(listaArray)
}



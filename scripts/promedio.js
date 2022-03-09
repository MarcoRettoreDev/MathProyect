// PROMEDIO (MEDIA ARITMETICA)

function mediaAritmetica (lista)
{
  const sumaLista = lista.reduce((acc = 0, elem)=>
    {
      return acc + elem;
    });
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

// MODA

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

  const moda = listArray[listArray.length - 1];
  const result = (`La MODA es: ${moda[0]} ,que se repite ${moda[1]} veces dentro de la lista.`);
  return moda;
}
// returns an array with two index: 0 is the index of the mode, and 1 is the index of the repeats
// inside the array.


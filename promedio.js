const lista1 = 
[
  100,
  200,
  300,
  500
];

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



// for (let i = 0; i < lista.length; i++)
//   {
//     sumaLista += lista[i];
//   } 
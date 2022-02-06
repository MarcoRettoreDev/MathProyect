

function hideText(id) // funcion mostrar texto card
{
  var el = document.getElementById(id); //traemos elemento padre y buscamos su hijo para cambiar HTML style (mala práctica)
  el.childNodes[3].style.display = "none"; 
}

function showText(id)
{
  var el = document.getElementById(id);
  el.childNodes[3].style.display = "flex";
}

//boton menu burger
var btnMenuBurger = document.getElementById('menu-burger');
btnMenuBurger.onclick = () => span.style.display = "block";
// Boton menu cerrar
var span = document.getElementsByClassName("menu-wrapper")[0]; 
// span to close the modal
span.onclick = () => span.style.display = "none";


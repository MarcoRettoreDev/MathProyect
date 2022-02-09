function showModal ()
{
  const btn = document.getElementsByClassName('modal-about')
  return btn[0].style.display = "block";
}

function closeModal ()
{
  const btn = document.getElementsByClassName('modal-about')
  return btn[0].style.display = "none";
}

var skillButton = document.getElementById('skills-button');
skillButton.onclick = () => showModal();

//boton menu burger
var btnMenuBurger = document.getElementById('menu-burger');
btnMenuBurger.onclick = () => span.style.display = "block";
// Boton menu cerrar
var span = document.getElementsByClassName("menu-wrapper")[0]; 
span.onclick = () => span.style.display = "none";
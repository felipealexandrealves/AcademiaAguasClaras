var objeto = document.getElementById('container_unidades');

function atualizarOpacidade() {
  var alturaObjeto = objeto.offsetTop;
  var scrollTop = window.scrollY;
  var windowHeight = window.innerHeight;
  var novaOpacidade;

  if (scrollTop > alturaObjeto - windowHeight + 100) { // Ajuste 100 para a mudança ocorrer antes de chegar ao objeto
    novaOpacidade = 1; // Opacidade desejada
  } else {
    novaOpacidade = 0; // Opacidade inicial
  }
  objeto.style.opacity = novaOpacidade;   
}

window.addEventListener('scroll', function(){
  var alturaObjeto = objeto.offsetTop;
  var scrollTop = window.scrollY;
  var windowHeight = window.innerHeight;
  var novaOpacidade;

  if (scrollTop > alturaObjeto - windowHeight + 100) { // Ajuste 100 para a mudança ocorrer antes de chegar ao objeto
    novaOpacidade = 1; // Opacidade desejada
  } else {
    novaOpacidade = 0; // Opacidade inicial
  }
  objeto.style.opacity = novaOpacidade;  
});
  
//Imprimiendo Tweets - este pedazo de codigo sí corre (lo hicimos con ayuda del profesor)
var area = document.getElementById('insert-tweets');
var button = document.getElementById('save');
var divTweets = document.getElementById('container-tweets');

button.addEventListener('click', function(event) {
  if (area.value) {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    li.textContent = area.value;
    li.classList.add('li-tweet');
    divTweets.appendChild(ul);
    ul.appendChild(li);
    ul.classList.add('ul-div');
    area.value = '';
    count.textContent = max;
    var hour = document.createElement('span');
    hour.classList.add('span-hour');
    var newDate = new Date();
    hour.textContent = newDate.getHours() + ":" + newDate.getMinutes();
    li.appendChild(hour);
  };
});

//Contanto caracteres
var count = document.getElementsByClassName('count')[0];
var max = 140;
count.textContent = max;
//desactovar boton si no hay texto o hay solo espacios vacios
area.addEventListener('keyup', function() {
  count.textContent = (max - area.value.length);
  if (area.value.trim() == "" || area.value.length > 140) {
    button.disabled = true;
  }  else   {
    button.disabled = false;
  };
});

area.addEventListener('keyup', function() {
  if (area.value.length > 120 && area.value.length <=130) {
    count.style.color = '#20C200';
  }  else if (area.value.length>130){
    count.style.color = 'red';
  } else {
    count.style.color = 'black';
  }
});

area.addEventListener('keyup', ExpandirCajaDeTexto);
//Esta función modifica el estilo del Textarea poniento el Height (altura) = auto
//Y obtener la altura del Scroll y colocarselo a la altura del area (textarea)
function ExpandirCajaDeTexto () {
  if (area.scrollHeight > 54) {
    area.style.height = 'auto';
    area.style.height = area.scrollHeight+'px'
  } else {
    area.style.height = '50px';
  }
;}

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
indicadorColor.style.backgroundColor=colorActual;
  })
);

var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');

function paletaColores(nombreColores){
  for(i=0;i<nombreColores.length;i++){
    var color = document.createElement('div');
    color.style.backgroundColor = nombreColores[i];
    color.className = 'color-paleta';
    paleta.appendChild(color);
  }
}
function grilla (){
  for(i=0;i<=100;i++){
    for(j=0;j<=100;j++){
      var pixel = document.createElement('div');
      pixel.className='pixeles';
      // pixel.style.height='15px';
      // pixel.style.width='15px';
      grillaPixeles.appendChild(pixel)
    }
  }
}

paletaColores(nombreColores);
grilla();

var indicadorColor = document.getElementById('indicador-de-color');

var colores = document.getElementsByClassName('color-paleta');
 var pixeles = document.getElementsByClassName('pixeles')

for(i=0;i<colores.length;i++){
colores[i].addEventListener("click",tomarColor);
}

function tomarColor(e){
 var colorTomado = window.getComputedStyle(e.target)['backgroundColor'];
 indicadorColor.style.backgroundColor=colorTomado;
}

for(i=0;i<pixeles.length;i++){
  pixeles[i].addEventListener('mousedown',pintar);
  }


  function pintar(e){
e.target.style.backgroundColor=window.getComputedStyle(indicadorColor)['backgroundColor']

  }

var mouse = '';

for(i=0;i<pixeles.length;i++){
  pixeles[i].addEventListener('mousedown',mouseApretado);
  pixeles[i].addEventListener('mouseup',mouseSoltado);
  pixeles[i].addEventListener('mouseover',pintarSostenido);
  }

function mouseApretado(){
mouse='apretado';
}

function mouseSoltado(){
  mouse='soltado';
  }

function pintarSostenido(e){
  if(mouse=='apretado'){
    e.target.style.backgroundColor=window.getComputedStyle(indicadorColor)['backgroundColor']
  }}

  var borrarTodo = document.getElementById('borrar');

  borrarTodo.addEventListener('click',borroTodo);

  function borroTodo(e){
 $(document).ready(function(){
    $(pixeles).animate({'backgroundColor':'rgb(255,255,255)'},500);
  });
}